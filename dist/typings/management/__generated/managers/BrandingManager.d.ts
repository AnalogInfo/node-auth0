import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  GetBranding200Response,
  GetUniversalLogin200Response,
  PatchBrandingRequest,
  PostBrandingTheme200Response,
  PostBrandingThemeRequest,
  PutUniversalLoginRequest,
  DeleteBrandingThemeRequest,
  GetBrandingThemeRequest,
  PatchBrandingThemeRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class BrandingManager extends BaseAPI {
  /**
   * Delete branding theme.
   * Delete branding theme
   *
   * @throws {RequiredError}
   */
  deleteTheme(
    requestParameters: DeleteBrandingThemeRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Delete template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  deleteUniversalLoginTemplate(initOverrides?: InitOverride): Promise<ApiResponse<void>>;
  /**
   * Retrieve branding settings.
   * Get branding settings
   *
   * @throws {RequiredError}
   */
  getSettings(initOverrides?: InitOverride): Promise<ApiResponse<GetBranding200Response>>;
  /**
   * Retrieve branding theme.
   * Get branding theme
   *
   * @throws {RequiredError}
   */
  getTheme(
    requestParameters: GetBrandingThemeRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostBrandingTheme200Response>>;
  /**
   * Retrieve default branding theme.
   * Get default branding theme
   *
   * @throws {RequiredError}
   */
  getDefaultTheme(initOverrides?: InitOverride): Promise<ApiResponse<PostBrandingTheme200Response>>;
  /**
   * Get template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  getUniversalLoginTemplate(
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetUniversalLogin200Response>>;
  /**
   * Update branding settings.
   * Update branding settings
   *
   * @throws {RequiredError}
   */
  updateSettings(
    bodyParameters: PatchBrandingRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetBranding200Response>>;
  /**
   * Update branding theme.
   * Update branding theme
   *
   * @throws {RequiredError}
   */
  updateTheme(
    requestParameters: PatchBrandingThemeRequest,
    bodyParameters: PostBrandingThemeRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostBrandingTheme200Response>>;
  /**
   * Create branding theme.
   * Create branding theme
   *
   * @throws {RequiredError}
   */
  createTheme(
    bodyParameters: PostBrandingThemeRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostBrandingTheme200Response>>;
  /**
   * Update the Universal Login branding template.
   *
   * <p>When <code>content-type</code> header is set to <code>application/json</code>, the expected body must be JSON:</p>
   * <pre>
   * {
   *   "template": "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;{%- auth0:head -%}&lt;/head&gt;&lt;body&gt;{%- auth0:widget -%}&lt;/body&gt;&lt;/html&gt;"
   * }
   * </pre>
   *
   * <p>
   *   When <code>content-type</code> header is set to <code>text/html</code>, the expected body must be the HTML template:
   * </p>
   * <pre>
   * &lt!DOCTYPE html&gt;
   * &lt;code&gt;
   *   &lt;html&gt;
   *     &lt;head&gt;
   *      {%- auth0:head -%}
   *     &lt;/head&gt;
   *     &lt;body&gt;
   *       {%- auth0:widget -%}
   *     &lt;/body&gt;
   *   &lt;/html&gt;
   * &lt;/code&gt;
   * </pre>
   *
   * Set template for New Universal Login Experience
   *
   * @throws {RequiredError}
   */
  setUniversalLoginTemplate(
    bodyParameters: PutUniversalLoginRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
}
export {};
