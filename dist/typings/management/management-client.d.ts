import { ManagementClientBase } from './__generated';
import {
  ManagementClientOptionsWithClientCredentials,
  ManagementClientOptionsWithToken,
} from './management-client.options';
import { Headers } from 'node-fetch';
export declare class ManagementApiError extends Error {
  errorCode: string;
  error: string;
  statusCode: number;
  body: string;
  headers: Headers;
  msg: string;
  name: 'ManagementApiError';
  constructor(
    errorCode: string,
    error: string,
    statusCode: number,
    body: string,
    headers: Headers,
    msg: string
  );
}
export declare class ManagementClient extends ManagementClientBase {
  constructor(options: ManagementClientOptionsWithToken);
  constructor(options: ManagementClientOptionsWithClientCredentials);
}
