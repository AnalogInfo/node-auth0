import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  CustomDomain,
  PatchCustomDomainsByIdRequest,
  PostCustomDomains201Response,
  PostCustomDomainsRequest,
  PostVerify200Response,
  DeleteCustomDomainsByIdRequest,
  GetCustomDomainsByIdRequest,
  PatchCustomDomainsByIdOperationRequest,
  PostVerifyRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class CustomDomainsManager extends BaseAPI {
  /**
   * Delete a custom domain and stop serving requests for it.
   * Delete custom domain configuration
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteCustomDomainsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieve details on <a href="https://auth0.com/docs/custom-domains">custom domains</a>.
   * Get custom domains configurations
   *
   * @throws {RequiredError}
   */
  getAll(initOverrides?: InitOverride): Promise<ApiResponse<Array<CustomDomain>>>;
  /**
   * Retrieve a custom domain configuration and status.
   * Get custom domain configuration
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetCustomDomainsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<CustomDomain>>;
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
  update(
    requestParameters: PatchCustomDomainsByIdOperationRequest,
    bodyParameters: PatchCustomDomainsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostCustomDomains201Response>>;
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
  create(
    bodyParameters: PostCustomDomainsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostCustomDomains201Response>>;
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
  verify(
    requestParameters: PostVerifyRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostVerify200Response>>;
}
export {};
