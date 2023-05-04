import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  GetGrants200ResponseOneOf,
  UserGrant,
  DeleteRequest,
  DeleteGrantsByIdRequest,
  GetGrantsRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class GrantsManager extends BaseAPI {
  /**
   * Delete a grant associated with your account.
   * Delete a grant by user_id
   *
   * @throws {RequiredError}
   */
  deleteByUserId(
    requestParameters?: DeleteRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Delete a grant associated with your account.
   * Delete a grant by id
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteGrantsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieve the <a href="https://auth0.com/docs/api-auth/which-oauth-flow-to-use">grants</a> associated with your account.
   * Get grants
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters: GetGrantsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetGrants200ResponseOneOf>>;
  getAll(
    requestParameters?: GetGrantsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<UserGrant>>>;
}
export {};
