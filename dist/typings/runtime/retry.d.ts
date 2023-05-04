import { Response } from 'node-fetch';
export interface RetryConfiguration {
  /**
   * Configure the usage of retries.
   * Defaults to true.
   */
  enabled?: boolean;
  /**
   * Configure the max amount of retries the SDK should do.
   * Defaults to 3.
   */
  maxRetries?: number;
  /**
   * Status Codes on which the SDK should trigger retries.
   * Defaults to [429].
   */
  retryWhen?: number[];
}
/**
 * @private
 * Function that retries the provided action callback for a configurable amount of time, defaults to 3.
 */
export declare function retry(
  action: () => Promise<Response>,
  { maxRetries, retryWhen }: RetryConfiguration
): Promise<Response>;
