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
exports.AttackProtectionManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class AttackProtectionManager extends BaseAPI {
  /**
   * Get breached password detection settings
   *
   * @throws {RequiredError}
   */
  async getBreachedPasswordDetectionConfig(initOverrides) {
    const response = await this.request(
      {
        path: `/attack-protection/breached-password-detection`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Get the brute force configuration
   *
   * @throws {RequiredError}
   */
  async getBruteForceConfig(initOverrides) {
    const response = await this.request(
      {
        path: `/attack-protection/brute-force-protection`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Get the brute force configuration defaults
   *
   * @throws {RequiredError}
   */
  async getBruteForceDefaults(initOverrides) {
    const response = await this.request(
      {
        path: `/attack-protection/brute-force-protection/defaults`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Get the suspicious IP throttling configuration
   *
   * @throws {RequiredError}
   */
  async getSuspiciousIpThrottlingConfig(initOverrides) {
    const response = await this.request(
      {
        path: `/attack-protection/suspicious-ip-throttling`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Update breached password detection settings
   *
   * @throws {RequiredError}
   */
  async updateBreachedPasswordDetectionConfig(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/attack-protection/breached-password-detection`,
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Update the brute force configuration
   *
   * @throws {RequiredError}
   */
  async updateBruteForceConfig(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/attack-protection/brute-force-protection`,
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Update the suspicious IP throttling configuration
   *
   * @throws {RequiredError}
   */
  async updateSuspiciousIpThrottlingConfig(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/attack-protection/suspicious-ip-throttling`,
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
}
exports.AttackProtectionManager = AttackProtectionManager;
//# sourceMappingURL=AttackProtectionManager.js.map
