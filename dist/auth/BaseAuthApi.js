'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BaseAuthAPI = exports.AuthApiError = void 0;
const runtime_1 = require('../runtime');
const clientAuthentication_1 = require('./clientAuthentication');
class AuthApiError extends Error {
  error;
  error_description;
  statusCode;
  body;
  headers;
  name = 'AuthApiError';
  constructor(error, error_description, statusCode, body, headers) {
    super(error_description || error);
    this.error = error;
    this.error_description = error_description;
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
  }
}
exports.AuthApiError = AuthApiError;
async function parseError(response) {
  // Errors typically have a specific format:
  // {
  //    error: 'invalid_body',
  //    error_description: 'Bad Request',
  // }
  const body = await response.text();
  let data;
  try {
    data = JSON.parse(body);
    return new AuthApiError(
      data.error,
      data.error_description,
      response.status,
      body,
      response.headers
    );
  } catch (_) {
    return new runtime_1.ResponseError(
      response.status,
      body,
      response.headers,
      'Response returned an error code'
    );
  }
}
class BaseAuthAPI extends runtime_1.BaseAPI {
  domain;
  clientId;
  clientSecret;
  clientAssertionSigningKey;
  clientAssertionSigningAlg;
  constructor(configuration) {
    super({ ...configuration, baseUrl: `https://${configuration.domain}`, parseError });
    this.domain = configuration.domain;
    this.clientId = configuration.clientId;
    this.clientSecret = configuration.clientSecret;
    this.clientAssertionSigningKey = configuration.clientAssertionSigningKey;
    this.clientAssertionSigningAlg = configuration.clientAssertionSigningAlg;
  }
  async addClientAuthentication(payload, required) {
    return (0, clientAuthentication_1.addClientAuthentication)({
      payload,
      domain: this.domain,
      required,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      clientAssertionSigningKey: this.clientAssertionSigningKey,
      clientAssertionSigningAlg: this.clientAssertionSigningAlg,
    });
  }
}
exports.BaseAuthAPI = BaseAuthAPI;
//# sourceMappingURL=BaseAuthApi.js.map
