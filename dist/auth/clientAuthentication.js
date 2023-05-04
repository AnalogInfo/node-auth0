'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.addClientAuthentication = void 0;
const jose = __importStar(require('jose'));
const uuid_1 = require('uuid');
/**
 * Adds client authentication, if available, to the provided payload.
 *
 * Adds `client_secret` for Client Secret Post token endpoint auth method (the SDK doesn't use Client Secret Basic)
 * Adds `client_assertion` and `client_assertion_type` for Private Key JWT token endpoint auth method.
 *
 * If `clientAssertionSigningKey` is provided it takes precedent over `clientSecret` .
 */
const addClientAuthentication = async ({
  payload,
  domain,
  clientId,
  required,
  clientAssertionSigningKey,
  clientAssertionSigningAlg,
  clientSecret,
}) => {
  const cid = payload.client_id || clientId;
  if (clientAssertionSigningKey && !payload.client_assertion) {
    const alg = clientAssertionSigningAlg || 'RS256';
    const privateKey = await jose.importPKCS8(clientAssertionSigningKey, alg);
    payload.client_assertion = await new jose.SignJWT({})
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setSubject(cid)
      .setJti((0, uuid_1.v4)())
      .setIssuer(cid)
      .setAudience(`https://${domain}/`)
      .setExpirationTime('2mins')
      .sign(privateKey);
    payload.client_assertion_type = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer';
  } else if (clientSecret && !payload.client_secret) {
    payload.client_secret = clientSecret;
  }
  if (
    required &&
    (!payload.client_secret || payload.client_secret.trim().length === 0) &&
    (!payload.client_assertion || payload.client_assertion.trim().length === 0)
  ) {
    throw new Error('The client_secret or client_assertion field is required.');
  }
  return payload;
};
exports.addClientAuthentication = addClientAuthentication;
//# sourceMappingURL=clientAuthentication.js.map
