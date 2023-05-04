import { FetchParams, Middleware, RequestContext } from './__generated';
import {
  ManagementClientOptionsWithClientCredentials,
  ManagementClientOptionsWithToken,
} from './management-client.options';
export declare class TokenProviderMiddleware implements Middleware {
  private tokenProvider;
  constructor(
    options: ManagementClientOptionsWithToken | ManagementClientOptionsWithClientCredentials
  );
  pre?(context: RequestContext): Promise<FetchParams | void>;
}
