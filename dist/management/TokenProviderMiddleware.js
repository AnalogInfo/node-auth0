'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TokenProviderMiddleware = void 0;
const TokenProvider_1 = require('./TokenProvider');
class TokenProviderMiddleware {
  tokenProvider;
  constructor(options) {
    if ('token' in options) {
      this.tokenProvider = {
        getAccessToken: () => Promise.resolve(options.token),
      };
    } else {
      this.tokenProvider = new TokenProvider_1.TokenProvider({
        clientId: options.clientId,
        domain: options.domain,
        audience: options.audience ?? `https://${options.domain}/api/v2/`,
        ...{ clientSecret: options.clientSecret },
        ...{
          clientAssertionSigningKey: options.clientAssertionSigningKey,
        },
      });
    }
  }
  async pre(context) {
    const token = await this.tokenProvider.getAccessToken();
    context.init.headers = {
      ...context.init.headers,
      Authorization: `Bearer ${token}`,
    };
    return {
      url: context.url,
      init: context.init,
    };
  }
}
exports.TokenProviderMiddleware = TokenProviderMiddleware;
//# sourceMappingURL=TokenProviderMiddleware.js.map
