import * as runtime from '../../runtime';
import type { InitOverride, ApiResponse } from '../../runtime';
import type {
  DeleteMembersRequest,
  DeleteOrganizationMemberRolesRequest,
  GetEnabledConnections200ResponseOneOfInner,
  GetInvitations200ResponseOneOfInner,
  GetOrganizations200ResponseOneOfInner,
  PatchEnabledConnectionsByConnectionIdRequest,
  PatchOrganizationsByIdRequest,
  PostEnabledConnectionsRequest,
  PostInvitationsRequest,
  PostMembersRequest,
  PostOrganizationMemberRolesRequest,
  PostOrganizationsRequest,
  GetEnabledConnections200ResponseOneOf,
  GetInvitations200ResponseOneOf,
  GetMembers200ResponseOneOf,
  GetMembers200ResponseOneOfInner,
  GetOrganizationMemberRoles200ResponseOneOf,
  GetOrganizationMemberRoles200ResponseOneOfInner,
  GetOrganizations200ResponseOneOf,
  DeleteEnabledConnectionsByConnectionIdRequest,
  DeleteInvitationsByInvitationIdRequest,
  DeleteMembersOperationRequest,
  DeleteOrganizationMemberRolesOperationRequest,
  DeleteOrganizationsByIdRequest,
  GetEnabledConnectionsRequest,
  GetEnabledConnectionsByConnectionIdRequest,
  GetInvitationsRequest,
  GetInvitationsByInvitationIdRequest,
  GetMembersRequest,
  GetNameByNameRequest,
  GetOrganizationMemberRolesRequest,
  GetOrganizationsRequest,
  GetOrganizationsByIdRequest,
  PatchEnabledConnectionsByConnectionIdOperationRequest,
  PatchOrganizationsByIdOperationRequest,
  PostEnabledConnectionsOperationRequest,
  PostInvitationsOperationRequest,
  PostMembersOperationRequest,
  PostOrganizationMemberRolesOperationRequest,
} from '../models';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class OrganizationsManager extends BaseAPI {
  /**
   * Delete connections from an organization
   *
   * @throws {RequiredError}
   */
  removeEnabledConnection(
    requestParameters: DeleteEnabledConnectionsByConnectionIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Delete an invitation to organization
   *
   * @throws {RequiredError}
   */
  deleteInvitation(
    requestParameters: DeleteInvitationsByInvitationIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Delete members from an organization
   *
   * @throws {RequiredError}
   */
  deleteMembers(
    requestParameters: DeleteMembersOperationRequest,
    bodyParameters: DeleteMembersRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Remove one or more roles from a given user in the context of the provided organization
   *
   * @throws {RequiredError}
   */
  deleteMemberRoles(
    requestParameters: DeleteOrganizationMemberRolesOperationRequest,
    bodyParameters: DeleteOrganizationMemberRolesRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Delete a specific organization
   *
   * Delete organization
   *
   * @throws {RequiredError}
   */
  delete(
    requestParameters: DeleteOrganizationsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Get connections enabled for an organization
   *
   * @throws {RequiredError}
   */
  getEnabledConnections(
    requestParameters: GetEnabledConnectionsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEnabledConnections200ResponseOneOf>>;
  getEnabledConnections(
    requestParameters?: GetEnabledConnectionsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetEnabledConnections200ResponseOneOfInner>>>;
  /**
   * Get an enabled connection for an organization
   *
   * @throws {RequiredError}
   */
  getEnabledConnection(
    requestParameters: GetEnabledConnectionsByConnectionIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEnabledConnections200ResponseOneOfInner>>;
  /**
   * Get invitations to organization
   *
   * @throws {RequiredError}
   */
  getInvitations(
    requestParameters: GetInvitationsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetInvitations200ResponseOneOf>>;
  getInvitations(
    requestParameters?: GetInvitationsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetInvitations200ResponseOneOfInner>>>;
  /**
   * Get an invitation to organization
   *
   * @throws {RequiredError}
   */
  getInvitation(
    requestParameters: GetInvitationsByInvitationIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetInvitations200ResponseOneOfInner>>;
  /**
   * List organization members. This endpoint supports two types of pagination:
   * - Offset pagination
   * - Checkpoint pagination
   *
   * Checkpoint pagination must be used if you need to retrieve more than 1000 organization members.
   *
   * <h2>Checkpoint Pagination</h2>
   *
   * To search by checkpoint, use the following parameters:
   * - from: Optional id from which to start selection.
   * - take: The total amount of entries to retrieve when using the from parameter. Defaults to 50.
   *
   * Note: The first time you call this endpoint using Checkpoint Pagination, you should omit the <code>from</code> parameter. If there are more results, a <code>next</code> value will be included in the response. You can use this for subsequent API calls. When <code>next</code> is no longer included in the response, this indicates there are no more pages remaining.
   *
   * Get members who belong to an organization
   *
   * @throws {RequiredError}
   */
  getMembers(
    requestParameters: GetMembersRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetMembers200ResponseOneOf>>;
  getMembers(
    requestParameters?: GetMembersRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetMembers200ResponseOneOfInner>>>;
  /**
   * Get a specific organization by name
   *
   * Get organization by name
   *
   * @throws {RequiredError}
   */
  getByName(
    requestParameters: GetNameByNameRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizations200ResponseOneOfInner>>;
  /**
   * Get the roles assigned to an organization member
   *
   * @throws {RequiredError}
   */
  getMemberRoles(
    requestParameters: GetOrganizationMemberRolesRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizationMemberRoles200ResponseOneOf>>;
  getMemberRoles(
    requestParameters?: GetOrganizationMemberRolesRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetOrganizationMemberRoles200ResponseOneOfInner>>>;
  /**
   * List available organizations. This endpoint supports two types of pagination:
   * - Offset pagination
   * - Checkpoint pagination
   *
   * Checkpoint pagination must be used if you need to retrieve more than 1000 organizations.
   *
   * <h2>Checkpoint Pagination</h2>
   *
   * To search by checkpoint, use the following parameters:
   * - from: Optional id from which to start selection.
   * - take: The total amount of entries to retrieve when using the from parameter. Defaults to 50.
   *
   * Note: The first time you call this endpoint using Checkpoint Pagination, you should omit the <code>from</code> parameter. If there are more results, a <code>next</code> value will be included in the response. You can use this for subsequent API calls. When <code>next</code> is no longer included in the response, this indicates there are no more pages remaining.
   *
   * Get organizations
   *
   * @throws {RequiredError}
   */
  getAll(
    requestParameters: GetOrganizationsRequest & {
      include_totals: true;
    },
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizations200ResponseOneOf>>;
  getAll(
    requestParameters?: GetOrganizationsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<Array<GetOrganizations200ResponseOneOfInner>>>;
  /**
   * Get a specific organization
   *
   * Get organization
   *
   * @throws {RequiredError}
   */
  get(
    requestParameters: GetOrganizationsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizations200ResponseOneOfInner>>;
  /**
   * Modify an enabled_connection belonging to an Organization.
   *
   * Modify an Organizations Connection
   *
   * @throws {RequiredError}
   */
  updateEnabledConnection(
    requestParameters: PatchEnabledConnectionsByConnectionIdOperationRequest,
    bodyParameters: PatchEnabledConnectionsByConnectionIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEnabledConnections200ResponseOneOfInner>>;
  /**
   * Modify an organization
   *
   * Modify an Organization
   *
   * @throws {RequiredError}
   */
  update(
    requestParameters: PatchOrganizationsByIdOperationRequest,
    bodyParameters: PatchOrganizationsByIdRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizations200ResponseOneOfInner>>;
  /**
   * Add connections to an organization
   *
   * @throws {RequiredError}
   */
  addEnabledConnection(
    requestParameters: PostEnabledConnectionsOperationRequest,
    bodyParameters: PostEnabledConnectionsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetEnabledConnections200ResponseOneOfInner>>;
  /**
   * Create invitations to organization
   *
   * @throws {RequiredError}
   */
  createInvitation(
    requestParameters: PostInvitationsOperationRequest,
    bodyParameters: PostInvitationsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetInvitations200ResponseOneOfInner>>;
  /**
   * Add members to an organization
   *
   * @throws {RequiredError}
   */
  addMembers(
    requestParameters: PostMembersOperationRequest,
    bodyParameters: PostMembersRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Assign one or more roles to a given user that will be applied in the context of the provided organization
   *
   * @throws {RequiredError}
   */
  addMemberRoles(
    requestParameters: PostOrganizationMemberRolesOperationRequest,
    bodyParameters: PostOrganizationMemberRolesRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<void>>;
  /**
   * Create an organization
   *
   * Create an Organization
   *
   * @throws {RequiredError}
   */
  create(
    bodyParameters: PostOrganizationsRequest,
    initOverrides?: InitOverride
  ): Promise<ApiResponse<GetOrganizations200ResponseOneOfInner>>;
}
export {};
