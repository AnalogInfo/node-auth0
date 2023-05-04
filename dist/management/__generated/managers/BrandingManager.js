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
exports.BrandingManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class BrandingManager extends BaseAPI {
  /**
   * Delete branding theme.
   * Delete branding theme
   *
   * @throws {RequiredError}
   */
  async deleteTheme(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['themeId']);
    const response = await this.request(
      {
        path: `/branding/themes/{themeId}`.replace(
          '{themeId}',
          encodeURIComponent(String(requestParameters.themeId))
        ),
        method: 'DELETE',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Delete template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  async deleteUniversalLoginTemplate(initOverrides) {
    const response = await this.request(
      {
        path: `/branding/templates/universal-login`,
        method: 'DELETE',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Retrieve branding settings.
   * Get branding settings
   *
   * @throws {RequiredError}
   */
  async getSettings(initOverrides) {
    const response = await this.request(
      {
        path: `/branding`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieve branding theme.
   * Get branding theme
   *
   * @throws {RequiredError}
   */
  async getTheme(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['themeId']);
    const response = await this.request(
      {
        path: `/branding/themes/{themeId}`.replace(
          '{themeId}',
          encodeURIComponent(String(requestParameters.themeId))
        ),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieve default branding theme.
   * Get default branding theme
   *
   * @throws {RequiredError}
   */
  async getDefaultTheme(initOverrides) {
    const response = await this.request(
      {
        path: `/branding/themes/default`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Get template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  async getUniversalLoginTemplate(initOverrides) {
    const response = await this.request(
      {
        path: `/branding/templates/universal-login`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update branding settings.
   * Update branding settings
   *
   * @throws {RequiredError}
   */
  async updateSettings(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/branding`,
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update branding theme.
   * Update branding theme
   *
   * @throws {RequiredError}
   */
  async updateTheme(requestParameters, bodyParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['themeId']);
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/branding/themes/{themeId}`.replace(
          '{themeId}',
          encodeURIComponent(String(requestParameters.themeId))
        ),
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Create branding theme.
   * Create branding theme
   *
   * @throws {RequiredError}
   */
  async createTheme(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/branding/themes`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update the Universal Login branding template.
   *
   * <p>When <code>content-type</code> header is set to <code>application/json</code>, the expected body must be JSON:</p>
   * <pre>
   * {
   *   "template": "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;{%- auth0:head -%}&lt;/head&gt;&lt;body&gt;{%- auth0:widget -%}&lt;/body&gt;&lt;/html&gt;"
   * }
   * </pre>
   *
   * <p>
   *   When <code>content-type</code> header is set to <code>text/html</code>, the expected body must be the HTML template:
   * </p>
   * <pre>
   * &lt!DOCTYPE html&gt;
   * &lt;code&gt;
   *   &lt;html&gt;
   *     &lt;head&gt;
   *      {%- auth0:head -%}
   *     &lt;/head&gt;
   *     &lt;body&gt;
   *       {%- auth0:widget -%}
   *     &lt;/body&gt;
   *   &lt;/html&gt;
   * &lt;/code&gt;
   * </pre>
   *
   * Set template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  async setUniversalLoginTemplate(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/branding/templates/universal-login`,
        method: 'PUT',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
}
exports.BrandingManager = BrandingManager;
//# sourceMappingURL=BrandingManager.js.map
