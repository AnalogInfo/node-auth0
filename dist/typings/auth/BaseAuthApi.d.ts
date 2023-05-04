import { BaseAPI, Configuration as BaseConfiguration } from '../runtime';
import { AddClientAuthenticationPayload } from './clientAuthentication';
import { Headers } from 'node-fetch';
export interface Configuration extends Omit<BaseConfiguration, 'baseUrl' | 'parseError'> {
  domain: string;
  clientId: string;
  clientSecret?: string;
  clientAssertionSigningKey?: string;
  clientAssertionSigningAlg?: string;
}
export declare class AuthApiError extends Error {
  error: string;
  error_description: string;
  statusCode: number;
  body: string;
  headers: Headers;
  name: 'AuthApiError';
  constructor(
    error: string,
    error_description: string,
    statusCode: number,
    body: string,
    headers: Headers
  );
}
export declare class BaseAuthAPI extends BaseAPI {
  domain: string;
  clientId: string;
  clientSecret?: string;
  clientAssertionSigningKey?: string;
  clientAssertionSigningAlg?: string;
  constructor(configuration: Configuration);
  protected addClientAuthentication(
    payload: AddClientAuthenticationPayload,
    required: boolean
  ): Promise<AddClientAuthenticationPayload>;
}
