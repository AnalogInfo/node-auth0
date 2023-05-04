export interface AddClientAuthenticationPayload {
  client_id?: string;
  client_secret?: string;
  client_assertion?: string;
  client_assertion_type?: string;
  [key: string]: any;
}
interface AddClientAuthenticationOptions {
  payload: AddClientAuthenticationPayload;
  domain: string;
  clientId: string;
  required?: boolean;
  clientAssertionSigningKey?: string;
  clientAssertionSigningAlg?: string;
  clientSecret?: string;
}
/**
 * Adds client authentication, if available, to the provided payload.
 *
 * Adds `client_secret` for Client Secret Post token endpoint auth method (the SDK doesn't use Client Secret Basic)
 * Adds `client_assertion` and `client_assertion_type` for Private Key JWT token endpoint auth method.
 *
 * If `clientAssertionSigningKey` is provided it takes precedent over `clientSecret` .
 */
export declare const addClientAuthentication: ({
  payload,
  domain,
  clientId,
  required,
  clientAssertionSigningKey,
  clientAssertionSigningAlg,
  clientSecret,
}: AddClientAuthenticationOptions) => Promise<Record<string, unknown>>;
export {};
