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
exports.KeysManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class KeysManager extends BaseAPI {
  /**
   * Get an Application Signing Key by its key id
   *
   * @throws {RequiredError}
   */
  async get(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['kid']);
    const response = await this.request(
      {
        path: `/keys/signing/{kid}`.replace(
          '{kid}',
          encodeURIComponent(String(requestParameters.kid))
        ),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Get all Application Signing Keys
   *
   * @throws {RequiredError}
   */
  async getAll(initOverrides) {
    const response = await this.request(
      {
        path: `/keys/signing`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Rotate the Application Signing Key
   *
   * @throws {RequiredError}
   */
  async rotate(initOverrides) {
    const response = await this.request(
      {
        path: `/keys/signing/rotate`,
        method: 'POST',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Revoke an Application Signing Key by its key id
   *
   * @throws {RequiredError}
   */
  async revoke(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['kid']);
    const response = await this.request(
      {
        path: `/keys/signing/{kid}/revoke`.replace(
          '{kid}',
          encodeURIComponent(String(requestParameters.kid))
        ),
        method: 'PUT',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
}
exports.KeysManager = KeysManager;
//# sourceMappingURL=KeysManager.js.map
