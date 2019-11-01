import { Controller, Get, Post, Request, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async localLogin(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('protected')
  @UseGuards(AuthGuard('jwt'))
  protectedResource(@Req() req) {
    console.log(req.user);
    return 'JWT is working!';
  }


}
