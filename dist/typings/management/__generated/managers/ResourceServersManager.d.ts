import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  PostResourceServersRequest,
  ResourceServer,
  ResourceServerUpdate,
  GetResourceServers200ResponseOneOf,
  DeleteResourceServersByIdRequest,
  GetResourceServersRequest,
  GetResourceServersByIdRequest,
  PatchResourceServersByIdRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ResourceServersManager extends BaseAPI {
  /**
   * Delete an existing API (also known as a resource server).
   * Delete a resource server
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteResourceServersByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Retrieve <a href="https://auth0.com/docs/apis">APIs</a> (also known as resource servers) that you can consume from your authorized applications.
   * Get resource servers
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters: GetResourceServersRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetResourceServers200ResponseOneOf>>;
  getAll(
    requestParameters?: GetResourceServersRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<ResourceServer>>>;
  /**
   * Retrieve an <a href="https://auth0.com/docs/apis">API</a> (also known as resource server).
   * Get a resource server
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetResourceServersByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<ResourceServer>>;
  /**
   * Update an existing API (also known as a resource server).
   * Update a resource server
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchResourceServersByIdRequest,
    bodyParameters: ResourceServerUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Create a new API (also known as a resource server).
   * Create a resource server
   *
   * @throws {RequiredError}
   */
  create(
    bodyParameters: PostResourceServersRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
}
export {};
