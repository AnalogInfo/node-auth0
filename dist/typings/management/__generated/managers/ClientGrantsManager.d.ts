import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  ClientGrant,
  ClientGrantCreate,
  PatchClientGrantsByIdRequest,
  GetClientGrants200ResponseOneOf,
  DeleteClientGrantsByIdRequest,
  GetClientGrantsRequest,
  PatchClientGrantsByIdOperationRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ClientGrantsManager extends BaseAPI {
  /**
   * Delete a client grant.
   * Delete client grant
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteClientGrantsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieve <a href="https://auth0.com/docs/api-auth/grant/client-credentials">client grants</a>.
   *
   * Get client grants
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters: GetClientGrantsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetClientGrants200ResponseOneOf>>;
  getAll(
    requestParameters?: GetClientGrantsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<ClientGrant>>>;
  /**
   * Update a client grant.
   * Update client grant
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchClientGrantsByIdOperationRequest,
    bodyParameters: PatchClientGrantsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<ClientGrant>>;
  /**
   * Create a client grant.
   * Create client grant
   *
   * @throws {RequiredError}
   */
  create(
    bodyParameters: ClientGrantCreate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
}
export {};
