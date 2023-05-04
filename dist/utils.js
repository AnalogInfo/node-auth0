'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sanitizeArguments =
  exports.maybeDecode =
  exports.containsUnsafeChars =
  exports.generateClientInfo =
  exports.jsonToBase64 =
    void 0;
// import pkg from '../package.json' assert { type: 'json' };
/**
 * Given a JSON string, convert it to its base64 representation.
 *
 * @param {object} json Json data
 * @returns {string}
 */
const jsonToBase64 = (json) => {
  const bytes = Buffer.from(JSON.stringify(json));
  return bytes.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
exports.jsonToBase64 = jsonToBase64;
/**
 * Return an object with information about the current client.
 *
 * @function    generateClientInfo
 * @returns {object}   Object containing client information.
 */
const generateClientInfo = () => ({
  name: 'node-auth0',
  version: '3.3.0',
  env: {
    node: process.version.replace('v', ''),
  },
});
exports.generateClientInfo = generateClientInfo;
const containsUnsafeChars = (s) => {
  const safeChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$-_.+!*'(),%";
  return !!s.split('').find((c) => !safeChars.includes(c));
};
exports.containsUnsafeChars = containsUnsafeChars;
const maybeDecode = (url) => {
  if ((0, exports.containsUnsafeChars)(url)) {
    return encodeURIComponent(url);
  }
  return url;
};
exports.maybeDecode = maybeDecode;
const sanitizeArguments = function (optionsCandidate, cbCandidate) {
  if (optionsCandidate instanceof Function) {
    return {
      cb: optionsCandidate,
      options: undefined,
    };
  }
  return {
    cb: cbCandidate,
    options: optionsCandidate,
  };
};
exports.sanitizeArguments = sanitizeArguments;
//# sourceMappingURL=utils.js.map
