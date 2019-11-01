import { Controller, Get, Post, Request, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../auth.service';

@Controller('auth/local')
export class LocalController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('testJWT')
  testJWT(@Req() req) {
    console.log(req.user);
    return 'JWT is working!';
  }

}
