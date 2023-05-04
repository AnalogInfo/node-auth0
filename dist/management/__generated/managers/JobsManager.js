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
exports.JobsManager = void 0;
const runtime = __importStar(require('../../runtime'));
const { BaseAPI } = runtime;
/**
 *
 */
class JobsManager extends BaseAPI {
  /**
   * Retrieve error details of a failed job.
   * Get job error details
   *
   * @throws {RequiredError}
   */
  async getErrors(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/jobs/{id}/errors`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Retrieves a job. Useful to check its status.
   * Get a job
   *
   * @throws {RequiredError}
   */
  async get(requestParameters, initOverrides) {
    runtime.validateRequiredRequestParams(requestParameters, ['id']);
    const response = await this.request(
      {
        path: `/jobs/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
        method: 'GET',
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Export all users to a file via a long-running job.
   * Create export users job
   *
   * @throws {RequiredError}
   */
  async exportUsers(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/jobs/users-exports`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Import users from a <a href="https://manage.local.dev.auth0.com/docs/users/references/bulk-import-database-schema-examples">formatted file</a> into a connection via a long-running job.
   * Create import users job
   *
   * @throws {RequiredError}
   */
  async importUsers(bodyParameters, initOverrides) {
    const consumes = [{ contentType: 'multipart/form-data' }];
    let formParams;
    let useForm = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    useForm = runtime.canConsumeForm(consumes);
    if (useForm) {
      formParams = new runtime.FormData();
    } else {
      formParams = new URLSearchParams();
    }
    if (bodyParameters.users !== undefined) {
      formParams.append('users', bodyParameters.users);
    }
    if (bodyParameters.connection_id !== undefined) {
      formParams.append('connection_id', bodyParameters.connection_id);
    }
    if (bodyParameters.upsert !== undefined) {
      formParams.append('upsert', bodyParameters.upsert);
    }
    if (bodyParameters.external_id !== undefined) {
      formParams.append('external_id', bodyParameters.external_id);
    }
    if (bodyParameters.send_completion_email !== undefined) {
      formParams.append('send_completion_email', bodyParameters.send_completion_email);
    }
    const response = await this.request(
      {
        path: `/jobs/users-imports`,
        method: 'POST',
        body: formParams,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
  /**
   * Send an email to the specified user that asks them to click a link to <a href="https://auth0.com/docs/email/custom#verification-email">verify their email address</a>.
   *
   * Note: You must have the `Status` toggle enabled for the verification email template for the email to be sent.
   * Send an email address verification email
   *
   * @throws {RequiredError}
   */
  async verifyEmail(bodyParameters, initOverrides) {
    const headerParameters = {};
    headerParameters['Content-Type'] = 'application/json';
    const response = await this.request(
      {
        path: `/jobs/verification-email`,
        method: 'POST',
        headers: headerParameters,
        body: bodyParameters,
      },
      initOverrides
    );
    return runtime.JSONApiResponse.fromResponse(response);
  }
}
exports.JobsManager = JobsManager;
//# sourceMappingURL=JobsManager.js.map
