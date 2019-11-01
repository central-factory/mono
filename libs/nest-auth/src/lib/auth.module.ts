import { Module, DynamicModule, Provider } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';

import { JwtStrategy } from './jwt';
import { GoogleStrategy, GoogleController } from './google';
import { MicrosoftStrategy, MicrosoftController } from './microsoft';
import { SpotifyStrategy, SpotifyController } from './spotify';
import { LocalController, LocalStrategy } from './local';

import { ModuleOptions } from './auth.options';

@Module({
  exports: [AuthService]
})
export class AuthModule {

  static forRoot(
    options: ModuleOptions
  ): DynamicModule {
    const imports = [
      options.usersModule,
      PassportModule.register(options.passportSettings),
      JwtModule.register(options.jwtSettings),
    ];

    const controllers: Array<any> = [
      LocalController
    ];

    const providers: Array<Provider> = [
      {
        provide: 'AuthUsersService',
        useExisting: options.usersService
      },
      AuthService,
      LocalStrategy,
      {
        provide: 'JWT_STRATEGY_SETTINGS',
        useValue: options.providers.jwt
      },
      JwtStrategy
    ];

    if (options.providers.google) {
      providers.push({
        provide: 'GOOGLE_STRATEGY_SETTINGS',
        useValue: options.providers.google
      });
      providers.push(GoogleStrategy);
      controllers.push(GoogleController);
    }

    if (options.providers.microsoft) {
      providers.push({
        provide: 'MICROSOFT_STRATEGY_SETTINGS',
        useValue: options.providers.microsoft
      });
      providers.push(MicrosoftStrategy);
      controllers.push(MicrosoftController);
    }

    if (options.providers.spotify) {
      providers.push({
        provide: 'SPOTIFY_STRATEGY_SETTINGS',
        useValue: options.providers.spotify
      });
      providers.push(SpotifyStrategy);
      controllers.push(SpotifyController);
    }


    return {
      module: AuthModule,
      imports,
      controllers,
      providers,
      exports: [AuthService]
    }
  }
}
