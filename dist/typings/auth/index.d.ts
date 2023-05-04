import { Configuration } from './BaseAuthApi';
import { Database } from './Database';
import { OAuth } from './OAuth';
import { Passwordless } from './Passwordless';
export declare class AuthenticationClient {
  database: Database;
  oauth: OAuth;
  passwordless: Passwordless;
  constructor(options: Configuration);
}
