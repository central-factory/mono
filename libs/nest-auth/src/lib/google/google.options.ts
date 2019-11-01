
export interface GoogleStrategyOptions {
  clientID: string;
  clientSecret: string;
  scope: Array<string>;
  callbackURL: string;
  passReqToCallback?: boolean;
}
