'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthenticationClient = void 0;
const Database_1 = require('./Database');
const OAuth_1 = require('./OAuth');
const Passwordless_1 = require('./Passwordless');
class AuthenticationClient {
  database;
  oauth;
  passwordless;
  constructor(options) {
    this.database = new Database_1.Database(options);
    this.oauth = new OAuth_1.OAuth(options);
    this.passwordless = new Passwordless_1.Passwordless(options);
  }
}
exports.AuthenticationClient = AuthenticationClient;
//# sourceMappingURL=index.js.map
