import { default as FormData } from 'form-data';
import fetch, { RequestInit, RequestInfo, Response, Blob, Headers } from 'node-fetch';
import { RetryConfiguration } from './retry';
export { Blob, FormData };
export interface Configuration {
  baseUrl: string;
  fetchApi?: FetchAPI;
  middleware?: Middleware[];
  queryParamsStringify?: (params: HTTPQuery) => string;
  headers?: HTTPHeaders;
  retry?: RetryConfiguration;
  parseError: (response: Response) => Promise<Error>;
}
/**
 * This is the base class for all generated API classes.
 */
export declare class BaseAPI {
  protected configuration: Configuration;
  private middleware;
  private queryParamsStringify;
  private fetchApi;
  private parseError;
  constructor(configuration: Configuration);
  protected request(
    context: RequestOpts,
    initOverrides?: RequestInit | InitOverrideFunction
  ): Promise<Response>;
  private createFetchParams;
  private fetch;
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  private clone;
}
export declare class ResponseError extends Error {
  statusCode: number;
  body: string;
  headers: Headers;
  name: 'ResponseError';
  constructor(statusCode: number, body: string, headers: Headers, msg?: string);
}
export declare class FetchError extends Error {
  cause: Error;
  name: 'FetchError';
  constructor(cause: Error, msg?: string);
}
export declare class RequiredError extends Error {
  field: string;
  name: 'RequiredError';
  constructor(field: string, msg?: string);
}
export declare const COLLECTION_FORMATS: {
  csv: string;
  ssv: string;
  tsv: string;
  pipes: string;
};
export type FetchAPI = typeof fetch;
export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = {
  [key: string]: string;
};
export type HTTPQuery = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | Array<string | number | null | boolean>
    | Set<string | number | null | boolean>
    | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = {
  headers?: HTTPHeaders;
  method: HTTPMethod;
  credentials?: RequestCredentials;
  body?: HTTPBody;
};
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';
export type InitOverrideFunction = (requestContext: {
  init: HTTPRequestInit;
  context: RequestOpts;
}) => Promise<RequestInit>;
export type InitOverride = RequestInit | InitOverrideFunction;
export interface FetchParams {
  url: URL | RequestInfo;
  init: RequestInit;
}
export interface RequestOpts {
  path: string;
  method: HTTPMethod;
  headers?: HTTPHeaders;
  query?: HTTPQuery;
  body?: HTTPBody;
}
export declare function querystring(params: HTTPQuery, prefix?: string): string;
export declare function canConsumeForm(consumes: Consume[]): boolean;
export interface Consume {
  contentType: string;
}
export interface RequestContext {
  fetch: FetchAPI;
  url: URL | RequestInfo;
  init: RequestInit;
}
export interface ResponseContext {
  fetch: FetchAPI;
  url: URL | RequestInfo;
  init: RequestInit;
  response: Response;
}
export interface ErrorContext {
  fetch: FetchAPI;
  url: URL | RequestInfo;
  init: RequestInit;
  error: unknown;
  response?: Response;
}
export interface Middleware {
  pre?(context: RequestContext): Promise<FetchParams | void>;
  post?(context: ResponseContext): Promise<Response | void>;
  onError?(context: ErrorContext): Promise<Response | void>;
}
export interface ApiResponse<T> {
  data: T;
  headers: Headers;
  status: number;
  statusText: string;
}
export declare class JSONApiResponse<T> implements ApiResponse<T> {
  data: T;
  headers: Headers;
  readonly status: number;
  readonly statusText: string;
  constructor(data: T, headers: Headers, status: number, statusText: string);
  static fromResponse<T = unknown>(raw: Response): Promise<JSONApiResponse<T>>;
}
export declare class VoidApiResponse implements ApiResponse<undefined> {
  headers: Headers;
  readonly status: number;
  readonly statusText: string;
  data: undefined;
  constructor(headers: Headers, status: number, statusText: string);
  static fromResponse(raw: Response): Promise<VoidApiResponse>;
}
export declare class BlobApiResponse implements ApiResponse<Blob> {
  data: Blob;
  headers: Headers;
  readonly status: number;
  readonly statusText: string;
  constructor(data: Blob, headers: Headers, status: number, statusText: string);
  static fromResponse(raw: Response): Promise<BlobApiResponse>;
}
export declare class TextApiResponse implements ApiResponse<string> {
  data: string;
  headers: Headers;
  readonly status: number;
  readonly statusText: string;
  constructor(data: string, headers: Headers, status: number, statusText: string);
  static fromResponse(raw: Response): Promise<TextApiResponse>;
}
export declare function validateRequiredRequestParams<
  TRequestParams extends {
    [key: string]: any;
  }
>(requestParameters: TRequestParams, keys: Array<Extract<keyof TRequestParams, string>>): void;
type QueryParamConfig = {
  isArray?: boolean;
  isCollectionFormatMulti?: boolean;
  collectionFormat?: keyof typeof COLLECTION_FORMATS;
  isDateTimeType?: boolean;
  isDateType?: boolean;
};
export declare function applyQueryParams<
  TRequestParams extends {
    [key: string]: any;
  },
  Key extends Extract<keyof TRequestParams, string>
>(
  requestParameters: TRequestParams,
  keys: Array<{
    key: Key;
    config: QueryParamConfig;
  }>
): Pick<TRequestParams, Key>;
