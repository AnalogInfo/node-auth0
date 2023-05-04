'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManagementClient = exports.ManagementApiError = void 0;
const __generated_1 = require('./__generated');
const TokenProviderMiddleware_1 = require('./TokenProviderMiddleware');
const index_1 = require('./../runtime/index');
class ManagementApiError extends Error {
  errorCode;
  error;
  statusCode;
  body;
  headers;
  msg;
  name = 'ManagementApiError';
  constructor(errorCode, error, statusCode, body, headers, msg) {
    super(msg);
    this.errorCode = errorCode;
    this.error = error;
    this.statusCode = statusCode;
    this.body = body;
    this.headers = headers;
    this.msg = msg;
  }
}
exports.ManagementApiError = ManagementApiError;
async function parseError(response) {
  // Errors typically have a specific format:
  // {
  //    errorCode: 'invalid_body',
  //    error: 'Bad Request',
  //    message: 'Payload validation failed ...',
  //    statusCode: 400
  // }
  const body = await response.text();
  let data;
  try {
    data = JSON.parse(body);
    return new ManagementApiError(
      data.errorCode,
      data.error,
      data.statusCode || response.status,
      body,
      response.headers,
      data.message
    );
  } catch (_) {
    return new index_1.ResponseError(
      response.status,
      body,
      response.headers,
      'Response returned an error code'
    );
  }
}
class ManagementClient extends __generated_1.ManagementClientBase {
  constructor(options) {
    super({
      ...options,
      baseUrl: `https://${options.domain}/api/v2`,
      middleware: [
        ...(options.middleware || []),
        new TokenProviderMiddleware_1.TokenProviderMiddleware(options),
      ],
      parseError,
    });
  }
}
exports.ManagementClient = ManagementClient;
//# sourceMappingURL=management-client.js.map
