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
exports.ConnectionsManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class ConnectionsManager extends BaseAPI {
  /**
   * Deletes a connection and all its users.
   *
   * Delete a connection
   *
   * @throws {RequiredError}
   */
  async delete(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/connections/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
        method: 'DELETE',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * Deletes a specified connection user by its email (you cannot delete all users from specific connection). Currently, only Database Connections are supported.
   *
   * Delete a connection user
   *
   * @throws {RequiredError}
   */
  async deleteUserByEmail(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id', 'email']);
    const queryParameters = runtime.applyQueryParams(requestParameters, [
      {
        key: 'email',
        config: {},
      },
    ]);
    const response = await this.request(
      {
        path: `/connections/{id}/users`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
        query: queryParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  async getAll(requestParameters = {}, initOverrides) {
    const queryParameters = runtime.applyQueryParams(requestParameters, [
      {
        key: 'per_page',
        config: {},
      },
      {
        key: 'page',
        config: {},
      },
      {
        key: 'include_totals',
        config: {},
      },
      {
        key: 'strategy',
        config: {
          isArray: true,
          isCollectionFormatMulti: true,
        },
      },
      {
        key: 'name',
        config: {},
      },
      {
        key: 'fields',
        config: {},
      },
      {
        key: 'include_fields',
        config: {},
      },
    ]);
    const response = await this.request(
      {
        path: `/connections`,
        method: 'GET',
        query: queryParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieves a connection by its <code>ID</code>.
   *
   * Get a connection
   *
   * @throws {RequiredError}
   */
  async get(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const queryParameters = runtime.applyQueryParams(requestParameters, [
      {
        key: 'fields',
        config: {},
      },
      {
        key: 'include_fields',
        config: {},
      },
    ]);
    const response = await this.request(
      {
        path: `/connections/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
        method: 'GET',
        query: queryParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieves the status of an ad/ldap connection referenced by its <code>ID</code>. <code>200 OK</code> http status code response is returned  when the connection is online, otherwise a <code>404</code> status code is returned along with an error message
   * Check connection status
   *
   * @throws {RequiredError}
   */
  async checkStatus(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/connections/{id}/status`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
  /**
   * <b>Note:</b> if you use the options parameter, the whole options object will be overridden, so ensure that all parameters are present
   *
   * Update a connection
   *
   * @throws {RequiredError}
   */
  async update(requestParameters, bodyParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/connections/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
        method: 'PATCH',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
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
  async create(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/connections`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
}
exports.ConnectionsManager = ConnectionsManager;
//# sourceMappingURL=ConnectionsManager.js.map
