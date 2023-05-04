import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  PatchBreachedPasswordDetectionRequest,
  PatchBruteForceProtectionRequest,
  PatchSuspiciousIpThrottlingRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class AttackProtectionManager extends BaseAPI {
  /**
   * Get breached password detection settings
   *
   * @throws {RequiredError}
   */
  getBreachedPasswordDetectionConfig(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
  /**
   * Get the brute force configuration
   *
   * @throws {RequiredError}
   */
  getBruteForceConfig(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
  /**
   * Get the brute force configuration defaults
   *
   * @throws {RequiredError}
   */
  getBruteForceDefaults(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
  /**
   * Get the suspicious IP throttling configuration
   *
   * @throws {RequiredError}
   */
  getSuspiciousIpThrottlingConfig(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
  /**
   * Update breached password detection settings
   *
   * @throws {RequiredError}
   */
  updateBreachedPasswordDetectionConfig(
    bodyParameters: PatchBreachedPasswordDetectionRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Update the brute force configuration
   *
   * @throws {RequiredError}
   */
  updateBruteForceConfig(
    bodyParameters: PatchBruteForceProtectionRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Update the suspicious IP throttling configuration
   *
   * @throws {RequiredError}
   */
  updateSuspiciousIpThrottlingConfig(
    bodyParameters: PatchSuspiciousIpThrottlingRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
}
export {};
