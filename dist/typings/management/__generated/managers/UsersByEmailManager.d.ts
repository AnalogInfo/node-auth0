import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type { GetUsers200ResponseOneOfInner, GetUsersByEmailRequest } from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class UsersByEmailManager extends BaseAPI {
  /**
   * If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as <b>JohnSmith@example.com</b>, Auth0 saves the user's email as <b>johnsmith@example.com</b>.
   *
   * In cases where Auth0 is not the idP, the `email` is stored based on the rules of idP, so make sure the search is made using the correct capitalization.
   *
   * When using this endpoint, make sure that you are searching for users via email addresses using the correct case.
   *
   * Search Users by Email
   *
   * @throws {RequiredError}
   */
  getByEmail(
    requestParameters: GetUsersByEmailRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetUsers200ResponseOneOfInner>>>;
}
export {};
