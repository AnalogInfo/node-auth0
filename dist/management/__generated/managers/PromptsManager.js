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
exports.PromptsManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class PromptsManager extends BaseAPI {
  /**
   * Retrieve custom text for a specific prompt and language.
   * Get custom text for a prompt
   *
   * @throws {RequiredError}
   */
  async getCustomTextByLanguage(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['prompt', 'language']);
    const response = await this.request(
      {
        path: `/prompts/{prompt}/custom-text/{language}`
          .replace('{prompt}', encodeURIComponent(String(requestParameters.prompt)))
          .replace('{language}', encodeURIComponent(String(requestParameters.language))),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieve prompts settings.
   * Get prompts settings
   *
   * @throws {RequiredError}
   */
  async get(initOverrides) {
    const response = await this.request(
      {
        path: `/prompts`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update prompts settings.
   * Update prompts settings
   *
   * @throws {RequiredError}
   */
  async update(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/prompts`,
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Set custom text for a specific prompt. Existing texts will be overwritten.
   * Set custom text for a specific prompt
   *
   * @throws {RequiredError}
   */
  async updateCustomTextByLanguage(requestParameters, bodyParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['prompt', 'language']);
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/prompts/{prompt}/custom-text/{language}`
          .replace('{prompt}', encodeURIComponent(String(requestParameters.prompt)))
          .replace('{language}', encodeURIComponent(String(requestParameters.language))),
        method: 'PUT',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
}
exports.PromptsManager = PromptsManager;
//# sourceMappingURL=PromptsManager.js.map
