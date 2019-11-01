
export interface MicrosoftStrategyOptions {
  clientID: string;
  clientSecret: string;
  authorizationURL?: string;
  tokenURL?: string;
  scope: Array<string>;
  callbackURL: string;
  passReqToCallback?: boolean;
}
