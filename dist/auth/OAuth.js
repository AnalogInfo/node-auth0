'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OAuth = void 0;
const runtime_1 = require('../runtime');
const BaseAuthApi_1 = require('./BaseAuthApi');
/**
 *  OAuth 2.0 flows.
 */
class OAuth extends BaseAuthApi_1.BaseAuthAPI {
  /**
   * Perform an OAuth 2.0 grant.
   * (You should only need this if you can't find the grant you need in this class.)
   */
  async grant(grantType, bodyParameters, initOverrides) {
    const response = await this.request(
      {
        path: '/oauth/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: this.clientId,
          ...bodyParameters,
          grant_type: grantType,
        }),
      },
      initOverrides
    );
    return runtime_1.JSONApiResponse.fromResponse(response);
  }
  /**
   * This is the flow that regular web apps use to access an API.
   *
   * Use this endpoint to exchange an Authorization Code for a Token.
   *
   * See: https://auth0.com/docs/api/authentication#authorization-code-flow44
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId',
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.authorizationCodeGrant({ code: 'mycode' });
   * ```
   */
  async authorizationCodeGrant(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['code']);
    return this.grant(
      'authorization_code',
      await this.addClientAuthentication(bodyParameters, true),
      initOverrides
    );
  }
  /**
   * PKCE was originally designed to protect the authorization code flow in mobile apps,
   * but its ability to prevent authorization code injection makes it useful for every type of OAuth client,
   * even web apps that use client authentication.
   *
   * See: https://auth0.com/docs/api/authentication#authorization-code-flow-with-pkce45
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId',
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.authorizationCodeGrantWithPKCE({
   *   code: 'mycode',
   *   code_verifier: 'mycodeverifier'
   * });
   * ```
   */
  async authorizationCodeGrantWithPKCE(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['code', 'code_verifier']);
    return this.grant(
      'authorization_code',
      await this.addClientAuthentication(bodyParameters, false),
      initOverrides
    );
  }
  /**
   * This is the OAuth 2.0 grant that server processes use to access an API.
   *
   * Use this endpoint to directly request an Access Token by using the Client's credentials
   * (a Client ID and a Client Secret or a Client Assertion).
   *
   * See: https://auth0.com/docs/api/authentication#client-credentials-flow
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId',
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.clientCredentialsGrant({ audience: 'myaudience' });
   * ```
   */
  async clientCredentialsGrant(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['audience']);
    return this.grant(
      'client_credentials',
      await this.addClientAuthentication(bodyParameters, true),
      initOverrides
    );
  }
  /**
   * This information is typically received from a highly trusted public client like a SPA*.
   * (<strong>*Note:</string> For single-page applications and native/mobile apps, we recommend using web flows instead.)
   *
   * See: https://auth0.com/docs/api/authentication#resource-owner-password
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId'
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.clientCredentialsGrant({
   *     username: 'myusername@example.com',
   *     password: 'mypassword'
   *   },
   *   { headers: { 'auth0-forwarded-for': 'END.USER.IP.123' } }
   * );
   * ```
   *
   * Set the'auth0-forwarded-for' header to the end-user IP as a string value if you want
   * brute-force protection to work in server-side scenarios.
   *
   * See https://auth0.com/docs/get-started/authentication-and-authorization-flow/avoid-common-issues-with-resource-owner-password-flow-and-attack-protection
   *
   */
  async passwordGrant(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['username', 'password']);
    return this.grant(
      bodyParameters.realm ? 'http://auth0.com/oauth/grant-type/password-realm' : 'password',
      await this.addClientAuthentication(bodyParameters, false),
      initOverrides
    );
  }
  /**
   * Use this endpoint to refresh an Access Token using the Refresh Token you got during authorization.
   *
   * See: https://auth0.com/docs/api/authentication#refresh-token
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId'
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.refreshTokenGrant({ refresh_token: 'myrefreshtoken' })
   * ```
   */
  async refreshTokenGrant(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['refresh_token']);
    return this.grant(
      'refresh_token',
      await this.addClientAuthentication(bodyParameters, false),
      initOverrides
    );
  }
  /**
   * Use this endpoint to invalidate a Refresh Token if it has been compromised.
   *
   * The behaviour of this endpoint depends on the state of the <a href="https://auth0.com/docs/secure/tokens/refresh-tokens/revoke-refresh-tokens#refresh-tokens-and-grants">Refresh Token Revocation Deletes Grant</a> toggle.
   * If this toggle is enabled, then each revocation request invalidates not only the specific token, but all other tokens based on the same authorization grant.
   * This means that all Refresh Tokens that have been issued for the same user, application, and audience will be revoked.
   * If this toggle is disabled, then only the refresh token is revoked, while the grant is left intact.
   *
   * See: https://auth0.com/docs/api/authentication#revoke-refresh-token
   *
   * @example
   * ```js
   * const auth0 = new AuthenticationApi({
   *    domain: 'my-domain.auth0.com',
   *    clientId: 'myClientId'
   *    clientSecret: 'myClientSecret'
   * });
   *
   * await auth0.oauth.revokeRefreshToken({ token: 'myrefreshtoken' })
   * ```
   */
  async revokeRefreshToken(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['token']);
    const response = await this.request(
      {
        path: '/oauth/revoke',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: await this.addClientAuthentication(
          { client_id: this.clientId, ...bodyParameters },
          false
        ),
      },
      initOverrides
    );
    return runtime_1.VoidApiResponse.fromResponse(response);
  }
}
exports.OAuth = OAuth;
//# sourceMappingURL=OAuth.js.map
