import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  EmailTemplateUpdate,
  GetEmailTemplatesByTemplateName200Response,
  PostEmailTemplatesRequest,
  GetEmailTemplatesByTemplateNameRequest,
  PatchEmailTemplatesByTemplateNameRequest,
  PutEmailTemplatesByTemplateNameRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class EmailTemplatesManager extends BaseAPI {
  /**
   * Retrieve an email template by pre-defined name. These names are `verify_email`, `verify_email_by_code`, `reset_email`, `welcome_email`, `blocked_account`, `stolen_credentials`, `enrollment_email`, `mfa_oob_code`, and `user_invitation`. The names `change_password`, and `password_reset` are also supported for legacy scenarios.
   * Get an email template
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetEmailTemplatesByTemplateNameRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEmailTemplatesByTemplateName200Response>>;
  /**
   * Modify an email template.
   * Patch an email template
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchEmailTemplatesByTemplateNameRequest,
    bodyParameters: GetEmailTemplatesByTemplateName200Response,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEmailTemplatesByTemplateName200Response>>;
  /**
   * Create an email template.
   * Create an email template
   *
   * @throws {RequiredError}
   */
  create(
    bodyParameters: PostEmailTemplatesRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostEmailTemplatesRequest>>;
  /**
   * Update an email template.
   * Update an email template
   *
   * @throws {RequiredError}
   */
  put(
    requestParameters: PutEmailTemplatesByTemplateNameRequest,
    bodyParameters: EmailTemplateUpdate,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<PostEmailTemplatesRequest>>;
}
export {};
