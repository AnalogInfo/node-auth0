import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  Client,
  ClientCreate,
  ClientUpdate,
  DeleteClientsByIdRequest,
  GetClientsRequest,
  GetClientsByIdRequest,
  PatchClientsByIdRequest,
  PostRotateSecretRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ClientsManager extends BaseAPI {
  /**
   * Delete a client and related configuration (rules, connections, etc).
   * Delete a client
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteClientsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieve clients (applications and SSO integrations) matching provided filters. A list of fields to include or exclude
   * may also be specified. Note:
   * <ul>
   *   <li>
   *     <code>client_id</code>, <code>app_type</code>, <code>name</code>, and <code>description</code> can be retrieved with
   *     any scope.
   *   </li>
   *   <li>
   *     <code>callbacks</code>, <code>oidc_backchannel_logout</code>, <code>allowed_origins</code>,
   *     <code>web_origins</code>, <code>tenant</code>, <code>global</code>, <code>config_route</code>,
   *     <code>callback_url_template</code>, <code>jwt_configuration</code>,
   *     <code>jwt_configuration.lifetime_in_seconds</code>, <code>jwt_configuration.secret_encoded</code>,
   *     <code>jwt_configuration.scopes</code>, <code>jwt_configuration.alg</code>, <code>api_type</code>,
   *     <code>logo_uri</code>, <code>allowed_clients</code>, <code>owners</code>, <code>custom_login_page</code>,
   *     <code>custom_login_page_off</code>, <code>sso</code>, <code>addons</code>, <code>form_template</code>,
   *     <code>custom_login_page_codeview</code>, <code>resource_servers</code>, <code>client_metadata</code>,
   *     <code>mobile</code>, <code>mobile.android</code>, <code>mobile.ios</code>, <code>allowed_logout_urls</code>,
   *     <code>token_endpoint_auth_method</code>, <code>is_first_party</code>, <code>oidc_conformant</code>,
   *     <code>is_token_endpoint_ip_header_trusted</code>, <code>initiate_login_uri</code>, <code>grant_types</code>,
   *     <code>refresh_token</code>, <code>refresh_token.rotation_type</code>, <code>refresh_token.expiration_type</code>,
   *     <code>refresh_token.leeway</code>, <code>refresh_token.token_lifetime</code>, <code>organization_usage</code>, and
   *     <code>organization_require_behavior</code> properties can only be retrieved with the <code>read:clients</code> or
   *     <code>read:client_keys</code> scope.
   *   </li>
   *   <li>
   *     <code>encryption_key</code>, <code>encryption_key.pub</code>, <code>encryption_key.cert</code>,
   *     <code>client_secret</code>, and <code>signing_key</code> properties can only be retrieved with the
   *     <code>read:client_keys</code> scope.
   *   </li>
   * </ul>
   *
   * Get clients
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters?: GetClientsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<Client>>>;
  /**
   * Retrieve client details. A list of fields to include or exclude may also be specified. Note:
   * <ul>
   *   <li>
   *     <code>client_id</code>, <code>app_type</code>, <code>name</code>, and <code>description</code> can be retrieved with
   *     the any of the scopes.
   *   </li>
   *   <li>
   *     <code>callbacks</code>, <code>oidc_backchannel_logout</code>, <code>allowed_origins</code>,
   *     <code>web_origins</code>, <code>tenant</code>, <code>global</code>, <code>config_route</code>,
   *     <code>callback_url_template</code>, <code>jwt_configuration</code>,
   *     <code>jwt_configuration.lifetime_in_seconds</code>, <code>jwt_configuration.secret_encoded</code>,
   *     <code>jwt_configuration.scopes</code>, <code>jwt_configuration.alg</code>, <code>api_type</code>,
   *     <code>logo_uri</code>, <code>allowed_clients</code>, <code>owners</code>, <code>custom_login_page</code>,
   *     <code>custom_login_page_off</code>, <code>sso</code>, <code>addons</code>, <code>form_template</code>,
   *     <code>custom_login_page_codeview</code>, <code>resource_servers</code>, <code>client_metadata</code>,
   *     <code>mobile</code>, <code>mobile.android</code>, <code>mobile.ios</code>, <code>allowed_logout_urls</code>,
   *     <code>token_endpoint_auth_method</code>, <code>is_first_party</code>, <code>oidc_conformant</code>,
   *     <code>is_token_endpoint_ip_header_trusted</code>, <code>initiate_login_uri</code>, <code>grant_types</code>,
   *     <code>refresh_token</code>, <code>refresh_token.rotation_type</code>, <code>refresh_token.expiration_type</code>,
   *     <code>refresh_token.leeway</code>, <code>refresh_token.token_lifetime</code>, <code>organization_usage</code>, and
   *     <code>organization_require_behavior</code> properties can only be retrieved with the <code>read:clients</code> or
   *     <code>read:client_keys</code> scope.
   *   </li>
   *   <li>
   *     <code>encryption_key</code>, <code>encryption_key.pub</code>, <code>encryption_key.cert</code>,
   *     <code>client_secret</code>, and <code>signing_key</code> properties can only be retrieved with the
   *     <code>read:client_keys</code> scope.
   *   </li>
   * </ul>
   *
   * Get a client
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetClientsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Client>>;
  /**
   * Note: The `client_secret` and `signing_key` attributes can only be updated with the `update:client_keys` scope.
   * Update a client
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchClientsByIdRequest,
    bodyParameters: ClientUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Client>>;
  /**
   * Create a new client (application or SSO integration).
   *
   * Note: We recommend leaving the `client_secret` parameter unspecified to allow the generation of a safe secret.
   *
   * <div class="alert alert-warning">SSO Integrations created via this endpoint will accept login requests and share user profile information.</div>
   *
   * Create a client
   *
   * @throws {RequiredError}
   */
  create(bodyParameters: ClientCreate, initOverrides?: InitOverride): Promise<ApiResponse<Client>>;
  /**
   * Rotate a client secret.
   *
   * Note: The generated secret is NOT base64 encoded.
   *
   * Rotate a client secret
   *
   * @throws {RequiredError}
   */
  rotateClientSecret(
    requestParameters: PostRotateSecretRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Client>>;
}
export {};
