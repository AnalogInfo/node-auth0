'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Database = void 0;
const runtime_1 = require('../runtime');
const BaseAuthApi_1 = require('./BaseAuthApi');
/**
 * Sign-up and change-password for Database & Active Directory authentication services.
 */
class Database extends BaseAuthApi_1.BaseAuthAPI {
  /**
   * Given a user's credentials, and a connection, this endpoint will create a new user using active authentication.
   *
   * This endpoint only works for database connections.
   *
   * See: https://auth0.com/docs/api/authentication#signup
   *
   * @example
   * ```js
   * var data = {
   *   email: '{EMAIL}',
   *   password: '{PASSWORD}',
   *   connection: 'Username-Password-Authentication'
   * };
   *
   * await auth0.database.signUp(data);
   * ```
   */
  async signUp(bodyParameters, initOverrides) {
    // TODO: call this `validateRequiredParams` so we can use with bodyParameters in the auth api
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, [
      'email',
      'password',
      'connection',
    ]);
    const response = await this.request(
      {
        path: '/dbconnections/signup',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { client_id: this.clientId, ...bodyParameters },
      },
      initOverrides
    );
    return runtime_1.JSONApiResponse.fromResponse(response);
  }
  /**
   * Given a user's email address and a connection, Auth0 will send a change password email.
   *
   * This endpoint only works for database connections.
   *
   * See: https://auth0.com/docs/api/authentication#change-password
   *
   * @example
   * ```js
   * var data = {
   *   email: '{EMAIL}',
   *   connection: 'Username-Password-Authentication'
   * };
   *
   * await auth0.database.changePassword(data);
   * ```
   */
  async changePassword(bodyParameters, initOverrides) {
    (0, runtime_1.validateRequiredRequestParams)(bodyParameters, ['email', 'connection']);
    const response = await this.request(
      {
        path: '/dbconnections/change_password',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { client_id: this.clientId, ...bodyParameters },
      },
      initOverrides
    );
    return runtime_1.TextApiResponse.fromResponse(response);
  }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map
