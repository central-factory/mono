
export interface ModuleOptions {
  passportSettings: {
    session: boolean;
    defaultStrategy?: string;
  };
  jwtSettings: {
    secret: string;
    signOptions?: any;
  };
  usersModule: any;
  usersService: any;
  providers: {
    jwt: any;
    google?: any;
    microsoft?: any;
    spotify?: any;
  }
}
