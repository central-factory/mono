# nest-auth

Nestjs Auth package

## Usage

```ts
import { Module } from '@nestjs/common';
import { AuthModule } from '@central-factory/nest-auth';
import { ExtractJwt } from 'passport-jwt';

import { UsersModule, UsersService } from './my-users-module';

@Module({
  imports: [
    UsersModule,
    AuthModule.forRoot({
      usersModule: UsersModule,
      usersService: UsersService,
      passportSettings: {
        session: true
        // defaultStrategy: 'jwt'
      },
      jwtSettings: {
        secret: process.env.JWT_SECRET,
        // signOptions: { expiresIn: '60s' }
      },
      providers: {
        jwt: {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true, // TO-DO: Remove this
          secretOrKey: process.env.JWT_SECRET,
        },
        google: {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          scope: [
            'profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/calendar'
          ],
          callbackURL: "http://localhost:3333/api/auth/google/callback",
          passReqToCallback: true,
        },
        microsoft: {
          clientID: process.env.MICROSOFT_CLIENT_ID,
          clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
          authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
          tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
          scope: [
            "User.Read",
            "Notes.Create",
            "Notes.Read",
            "Notes.Read.All",
            "Notes.ReadWrite",
            "Notes.ReadWrite.All"
          ],
          callbackURL: "http://localhost:3333/api/auth/microsoft/callback",
          passReqToCallback: true,
        },
        spotify: {
          clientID: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          callbackURL: 'http://localhost:3333/api/auth/spotify/callback',
          passReqToCallback: true,
        }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
