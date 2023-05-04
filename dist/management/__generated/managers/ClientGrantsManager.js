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
exports.ClientGrantsManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class ClientGrantsManager extends BaseAPI {
  /**
   * Delete a client grant.
   * Delete client grant
   *
   * @throws {RequiredError}
   */
  async delete(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/client-grants/{id}`.replace(
          '{id}',
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
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
        key: 'audience',
        config: {},
      },
      {
        key: 'client_id',
        config: {},
      },
    ]);
    const response = await this.request(
      {
        path: `/client-grants`,
        method: 'GET',
        query: queryParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Update a client grant.
   * Update client grant
   *
   * @throws {RequiredError}
   */
  async update(requestParameters, bodyParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/client-grants/{id}`.replace(
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
   * Create a client grant.
   * Create client grant
   *
   * @throws {RequiredError}
   */
  async create(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/client-grants`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.VoidApiResponse.fromResponse(response);
  }
}
exports.ClientGrantsManager = ClientGrantsManager;
//# sourceMappingURL=ClientGrantsManager.js.map
