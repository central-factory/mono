
import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { AuthService, } from '../auth.service';
import { AuthProvider } from '../auth.providers';
import { GoogleProfile } from './google.profile';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    @Inject('GOOGLE_STRATEGY_SETTINGS') settings: any,
    private auth: AuthService,
  ) {
    super(settings);
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile: GoogleProfile, done: Function)
  {
    try {
      const jwt = await this.auth.validateOAuthLogin({
        accessToken,
        refreshToken,
        ...profile
      }, AuthProvider.GOOGLE);
      const user = {
        jwt
      };

      done(null, user);

    } catch(err) {
      // console.log(err)
      done(err, false);
    }
  }
}
