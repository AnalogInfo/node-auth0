'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SanitizedError = exports.sanitizeErrorRequestData = void 0;
const util_1 = __importDefault(require('util'));
const sanitizeErrors = function (collection) {
  if (!collection) {
    return;
  }
  Object.keys(collection).forEach((key) => {
    if (key.toLowerCase().match('password|secret|authorization')) {
      collection[key] = '[REDACTED]';
    }
  });
};
/**
 * Given a response request error, sanitize sensitive data.
 *
 * @param {Error} error Error object
 * @returns {Error}
 */
const sanitizeErrorRequestData = function (error) {
  if (
    !error.response ||
    !error.response.request ||
    (!error.response.request._data && !error.response.request._header)
  ) {
    return error;
  }
  sanitizeErrors(error.response.request._header);
  sanitizeErrors(error.response.request._data);
  return error;
};
exports.sanitizeErrorRequestData = sanitizeErrorRequestData;
/**
 * Given an Api Error, modify the original error and sanitize
 * sensitive information using sanitizeErrorRequestData
 */
class SanitizedError extends Error {
  /**
   * Given an Api Error, modify the original error and sanitize
   * sensitive information using sanitizeErrorRequestData
   *
   * @param {string} name New error name
   * @param {string} message New error message
   * @param {number} status New error status
   * @param {any} requestInfo Request info to be attached on the error
   * @param {any} originalError Original error to be attached on the error
   *
   */
  constructor(name, message, status, requestInfo, originalError) {
    super(message || '');
    this.name = name || this.constructor.name || this.constructor.prototype.name || '';
    this.statusCode = status || (originalError && originalError.code);
    this.requestInfo = Object.assign({}, requestInfo);
    this.originalError = (0, exports.sanitizeErrorRequestData)(originalError);
    Error.captureStackTrace(this, this.constructor);
  }
}
exports.SanitizedError = SanitizedError;
util_1.default.inherits(SanitizedError, Error);
//# sourceMappingURL=errors.js.map
