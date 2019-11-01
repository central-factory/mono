import { Injectable, InternalServerErrorException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { sign } from 'jsonwebtoken';

import { UsersService } from './users.interface';
import { AuthProvider } from './auth.providers';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AuthUsersService')
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async handlePassportAuth(profile: any) {
    return profile;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateOAuthLogin(profile, provider: AuthProvider) {

    try {

      const user = await this.storeThirdPartyData(profile, provider);

      const {
        email,
        username,
        picUrl,
        id
      } = user;

      const payload = { email, username, picUrl, id };

      const jwt = sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

  private async storeThirdPartyData(profile: any, provider: AuthProvider) {

    const userData = this.extractUserFromThirdParty(profile, provider);

    let user = await this.usersService.findOneByMail(userData.email);

    if (user) {
      await this.usersService.updateThirdParties(
        user.id,
        {
          ...user.thirdParties,
          [provider]: {
            ...user.thirdParties[provider],
            ...profile
          }
        }
      );
    } else {
      user = await this.usersService.create({
        ...userData,
        thirdParties: {
          [provider]: profile
        }
      });
    }

    return user;
  }

  private extractUserFromThirdParty(profile: any, provider: AuthProvider) {
    switch(provider) {
      case AuthProvider.GOOGLE:
        return {
          email: profile.emails[0].value,
          username: profile.displayName,
          picUrl: profile.photos[0].value,
        };
      case AuthProvider.SPOTIFY:
        return {
          email: `${profile.username}@gmail.com`,
          username: profile.username,
        }
      case AuthProvider.MICROSOFT:
        return {
          email: profile._json.userPrincipalName,
          username: profile.displayName,
        }
      default:
        return {};
    }
  }
}
