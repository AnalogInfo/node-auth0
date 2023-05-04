import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type { TenantSettings, TenantSettingsUpdate, TenantSettingsRouteRequest } from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class TenantsManager extends BaseAPI {
  /**
   * Update settings for a tenant.
   * Update tenant settings
   *
   * @throws {RequiredError}
   */
  updateSettings(
    bodyParameters: TenantSettingsUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<TenantSettings>>;
  /**
   * Retrieve tenant settings. A list of fields to include or exclude may also be specified.
   * Get tenant settings
   *
   * @throws {RequiredError}
   */
  getSettings(
    requestParameters?: TenantSettingsRouteRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<TenantSettings>>;
}
export {};
