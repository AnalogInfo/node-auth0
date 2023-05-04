import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  PromptsSettings,
  PromptsSettingsUpdate,
  GetCustomTextByLanguageRequest,
  PutCustomTextByLanguageRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class PromptsManager extends BaseAPI {
  /**
   * Retrieve custom text for a specific prompt and language.
   * Get custom text for a prompt
   *
   * @throws {RequiredError}
   */
  getCustomTextByLanguage(
    requestParameters: GetCustomTextByLanguageRequest,
    initOverrides?: InitOverride
  ): Promise<
    ApiResponse<{
      [key: string]: any;
    }>
  >;
  /**
   * Retrieve prompts settings.
   * Get prompts settings
   *
   * @throws {RequiredError}
   */
  get(initOverrides?: InitOverride): Promise<ApiResponse<PromptsSettings>>;
  /**
   * Update prompts settings.
   * Update prompts settings
   *
   * @throws {RequiredError}
   */
  update(
    bodyParameters: PromptsSettingsUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PromptsSettings>>;
  /**
   * Set custom text for a specific prompt. Existing texts will be overwritten.
   * Set custom text for a specific prompt
   *
   * @throws {RequiredError}
   */
  updateCustomTextByLanguage(
    requestParameters: PutCustomTextByLanguageRequest,
    bodyParameters: {
      [key: string]: any;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
}
export {};
