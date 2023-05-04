export function sanitizeErrorRequestData(error: Error): Error;
/**
 * Given an Api Error, modify the original error and sanitize
 * sensitive information using sanitizeErrorRequestData
 */
export class SanitizedError extends Error {
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
  constructor(name: string, message: string, status: number, requestInfo: any, originalError: any);
  name: any;
  statusCode: any;
  requestInfo: any;
  originalError: Error;
}
