interface BaseOptions {
  domain: string;
  audience: string;
  clientId: string;
  enableCache?: boolean;
}
export declare class TokenProvider {
  private options;
  private authenticationClient;
  private expiresAt;
  private accessToken;
  private pending;
  constructor(
    options: BaseOptions & {
      clientSecret: string;
    }
  );
  constructor(
    options: BaseOptions & {
      clientAssertionSigningKey: string;
    }
  );
  getAccessToken(): Promise<string>;
}
export {};
