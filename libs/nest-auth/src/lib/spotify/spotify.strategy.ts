
import { Strategy } from 'passport-spotify';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';

import { AuthService } from '../auth.service';
import { AuthProvider } from '../auth.providers';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {

  constructor(
    @Inject('MICROSOFT_STRATEGY_SETTINGS') settings: any,
    private auth: AuthService,
  ) {
    super(settings);
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile: any, done: Function)
  {
    try {
      const jwt = await this.auth.validateOAuthLogin({
        accessToken,
        refreshToken,
        ...profile
      }, AuthProvider.SPOTIFY);
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
