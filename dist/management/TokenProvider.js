'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TokenProvider = void 0;
const auth_1 = require('../auth');
const LEEWAY = 10 * 1000;
class TokenProvider {
  options;
  authenticationClient;
  expiresAt = 0;
  accessToken = '';
  pending;
  constructor(options) {
    this.options = options;
    this.authenticationClient = new auth_1.AuthenticationClient({
      clientId: options.clientId,
      domain: options.domain,
      clientSecret: options.clientSecret,
      clientAssertionSigningKey: options.clientAssertionSigningKey,
    });
  }
  async getAccessToken() {
    const disableCache = this.options.enableCache === false;
    if (disableCache || !this.accessToken || Date.now() > this.expiresAt - LEEWAY) {
      this.pending =
        (!disableCache && this.pending) ||
        this.authenticationClient.oauth.clientCredentialsGrant({
          audience: this.options.audience,
        });
      const {
        data: { access_token: accessToken, expires_in: expiresIn },
      } = await this.pending.finally(() => {
        delete this.pending;
      });
      this.expiresAt = Date.now() + expiresIn * 1000;
      this.accessToken = accessToken;
    }
    return this.accessToken;
  }
}
exports.TokenProvider = TokenProvider;
//# sourceMappingURL=TokenProvider.js.map
