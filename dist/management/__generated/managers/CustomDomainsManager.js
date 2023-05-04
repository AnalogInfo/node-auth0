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
exports.CustomDomainsManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class CustomDomainsManager extends BaseAPI {
  /**
   * Delete a custom domain and stop serving requests for it.
   * Delete custom domain configuration
   *
   * @throws {RequiredError}
   */
  async delete(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/custom-domains/{id}`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Retrieve details on <a href="https://auth0.com/docs/custom-domains">custom domains</a>.
   * Get custom domains configurations
   *
   * @throws {RequiredError}
   */
  async getAll(initOverrides) {
    const response = await this.request(
      {
        path: `/custom-domains`,
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieve a custom domain configuration and status.
   * Get custom domain configuration
   *
   * @throws {RequiredError}
   */
  async get(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/custom-domains/{id}`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update a custom domain.
   *
   * These are the attributes that can be updated:
   *
   * - custom_client_ip_header
   * - tls_policy
   *
   * <h5>Updating CUSTOM_CLIENT_IP_HEADER for a custom domain</h5>To update the <code>custom_client_ip_header</code> for a domain, the body to
   * send should be:
   * <pre><code>{ "custom_client_ip_header": "cf-connecting-ip" }</code></pre>
   *
   * <h5>Updating TLS_POLICY for a custom domain</h5>To update the <code>tls_policy</code> for a domain, the body to send should be:
   * <pre><code>{ "tls_policy": "compatible" }</code></pre>
   *
   *
   * TLS Policies:
   *
   * - recommended - for modern usage this includes TLS 1.2 only
   * - compatible - compatible with older browsers this policy includes TLS 1.0, 1.1, 1.2
   *
   *
   * Some considerations:
   *
   * - The TLS ciphers and protocols available in each TLS policy follow industry recommendations, and may be updated occasionally.
   * - Do not use the <code>compatible</code> TLS policy unless you have clients that require TLS 1.0.
   *
   * Update custom domain configuration
   *
   * @throws {RequiredError}
   */
  async update(requestParameters, bodyParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/custom-domains/{id}`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
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
   * Create a new custom domain.
   *
   * Note: The custom domain will need to be verified before it will accept
   * requests.
   *
   * Optional attributes that can be updated:
   *
   * - custom_client_ip_header
   * - tls_policy
   *
   *
   * TLS Policies:
   *
   * - recommended - for modern usage this includes TLS 1.2 only
   * - compatible - compatible with older browsers this policy includes TLS 1.0, 1.1, 1.2
   *
   *
   * Some considerations:
   *
   * - The TLS ciphers and protocols available in each TLS policy follow industry recommendations, and may be updated occasionally.
   * - Do not use the <code>compatible</code> TLS policy unless you have clients that require TLS 1.0.
   *
   * Configure a new custom domain
   *
   * @throws {RequiredError}
   */
  async create(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/custom-domains`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Run the verification process on a custom domain.
   *
   * Note: Check the <code>status</code> field to see its verification status. Once verification is complete, it may take up to 10 minutes before the custom domain can start accepting requests.
   *
   * For <code>self_managed_certs</code>, when the custom domain is verified for the first time, the response will also include the <code>cname_api_key</code> which you will need to configure your proxy. This key must be kept secret, and is used to validate the proxy requests.
   *
   * <a href="https://auth0.com/docs/custom-domains#step-2-verify-ownership">Learn more</a> about verifying custom domains that use Auth0 Managed certificates.
   * <a href="https://auth0.com/docs/custom-domains/self-managed-certificates#step-2-verify-ownership">Learn more</a> about verifying custom domains that use Self Managed certificates.
   *
   * Verify a custom domain
   *
   * @throws {RequiredError}
   */
  async verify(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/custom-domains/{id}/verify`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'POST',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
}
exports.CustomDomainsManager = CustomDomainsManager;
//# sourceMappingURL=CustomDomainsManager.js.map
