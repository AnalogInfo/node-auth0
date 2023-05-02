import { Configuration } from './BaseAuthApi';
import { Database } from './Database';
import { OAuth } from './OAuth';
import { Passwordless } from './Passwordless';

export { default as Database } from './Database';
export * from './Database';
export { default as OAuth } from './OAuth';
export * from './OAuth';
export { default as Passwordless } from './Passwordless';
export * from './Passwordless';

export class AuthenticationClient {
  database: Database;
  oauth: OAuth;
  passwordless: Passwordless;

  constructor(options: Configuration) {
    this.database = new Database(options);
    this.oauth = new OAuth(options);
    this.passwordless = new Passwordless(options);
  }
}
