import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  Connection,
  ConnectionCreate,
  ConnectionUpdate,
  GetConnections200ResponseOneOf,
  DeleteConnectionsByIdRequest,
  DeleteUsersByEmailRequest,
  GetConnectionsRequest,
  GetConnectionsByIdRequest,
  GetStatusRequest,
  PatchConnectionsByIdRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ConnectionsManager extends BaseAPI {
  /**
   * Deletes a connection and all its users.
   *
   * Delete a connection
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteConnectionsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Deletes a specified connection user by its email (you cannot delete all users from specific connection). Currently, only Database Connections are supported.
   *
   * Delete a connection user
   *
   * @throws {RequiredError}
   */
  deleteUserByEmail(
    requestParameters: DeleteUsersByEmailRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieves every connection matching the specified strategy. All connections are retrieved if no strategy is being specified. Accepts a list of fields to include or exclude in the resulting list of connection objects.
   *
   * Get all connections
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters: GetConnectionsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetConnections200ResponseOneOf>>;
  getAll(
    requestParameters?: GetConnectionsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<Connection>>>;
  /**
   * Retrieves a connection by its <code>ID</code>.
   *
   * Get a connection
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetConnectionsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Connection>>;
  /**
   * Retrieves the status of an ad/ldap connection referenced by its <code>ID</code>. <code>200 OK</code> http status code response is returned  when the connection is online, otherwise a <code>404</code> status code is returned along with an error message
   * Check connection status
   *
   * @throws {RequiredError}
   */
  checkStatus(
    requestParameters: GetStatusRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * <b>Note:</b> if you use the options parameter, the whole options object will be overridden, so ensure that all parameters are present
   *
   * Update a connection
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchConnectionsByIdRequest,
    bodyParameters: ConnectionUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Connection>>;
  /**
   * Creates a new connection according to the JSON object received in <code>body</code>.
   *  The samples on the right show all available attributes. Mandatory attributes are <code>name</code> and <code>strategy</code>.
   *  Valid Strategy names are: <code>ad</code>, <code>adfs</code>, <code>amazon</code>, <code>apple</code>, <code>dropbox</code>, <code>bitbucket</code>, <code>aol</code>, <code>auth0-oidc</code>, <code>auth0</code>, <code>baidu</code>, <code>bitly</code>, <code>box</code>, <code>custom</code>, <code>daccount</code>, <code>dwolla</code>, <code>email</code>, <code>evernote-sandbox</code>, <code>evernote</code>, <code>exact</code>, <code>facebook</code>, <code>fitbit</code>, <code>flickr</code>, <code>github</code>, <code>google-apps</code>, <code>google-oauth2</code>, <code>instagram</code>, <code>ip</code>, <code>line</code>, <code>linkedin</code>, <code>miicard</code>, <code>oauth1</code>, <code>oauth2</code>, <code>office365</code>, <code>oidc</code>, <code>okta</code>, <code>paypal</code>, <code>paypal-sandbox</code>, <code>pingfederate</code>, <code>planningcenter</code>, <code>renren</code>, <code>salesforce-community</code>, <code>salesforce-sandbox</code>, <code>salesforce</code>, <code>samlp</code>, <code>sharepoint</code>, <code>shopify</code>, <code>sms</code>, <code>soundcloud</code>, <code>thecity-sandbox</code>, <code>thecity</code>, <code>thirtysevensignals</code>, <code>twitter</code>, <code>untappd</code>, <code>vkontakte</code>, <code>waad</code>, <code>weibo</code>, <code>windowslive</code>, <code>wordpress</code>, <code>yahoo</code>, <code>yammer</code>, <code>yandex</code>
   *
   * <div class="alert alert-warning">Connections created via this endpoint may redirect users to log in, receive and store user identities, and update user root profiles</div>
   * Create a connection
   *
   * @throws {RequiredError}
   */
  create(
    bodyParameters: ConnectionCreate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Connection>>;
}
export {};
