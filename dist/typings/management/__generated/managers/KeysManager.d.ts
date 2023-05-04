import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  GetSigningKeys200ResponseInner,
  PostSigningKeys201Response,
  PutSigningKeys200Response,
  GetSigningKeyRequest,
  PutSigningKeysRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class KeysManager extends BaseAPI {
  /**
   * Get an Application Signing Key by its key id
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetSigningKeyRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetSigningKeys200ResponseInner>>;
  /**
   * Get all Application Signing Keys
   *
   * @throws {RequiredError}
   */
  getAll(initOverrides?: InitOverride): Promise<ApiResponse<Array<GetSigningKeys200ResponseInner>>>;
  /**
   * Rotate the Application Signing Key
   *
   * @throws {RequiredError}
   */
  rotate(initOverrides?: InitOverride): Promise<ApiResponse<PostSigningKeys201Response>>;
  /**
   * Revoke an Application Signing Key by its key id
   *
   * @throws {RequiredError}
   */
  revoke(
    requestParameters: PutSigningKeysRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PutSigningKeys200Response>>;
}
export {};
