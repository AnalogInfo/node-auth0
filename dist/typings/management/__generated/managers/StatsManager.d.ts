import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type { StatsEntry, GetDailyRequest } from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class StatsManager extends BaseAPI {
  /**
   * Retrieve the number of active users that logged in during the last 30 days.
   * Get active users count
   *
   * @throws {RequiredError}
   */
  getActiveUsersCount(initOverrides?: InitOverride): Promise<ApiResponse<number>>;
  /**
   * Retrieve the number of logins, signups and breached-password detections (subscription required) that occurred each day within a specified date range.
   * Get daily stats
   *
   * @throws {RequiredError}
   */
  getDaily(
    requestParameters?: GetDailyRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<StatsEntry>>>;
}
export {};
