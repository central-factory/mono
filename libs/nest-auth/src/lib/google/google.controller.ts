import { Controller, Get, Post, Request, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/google')
export class GoogleController {

  @UseGuards(AuthGuard('google'))
  @Get()
  async login(@Request() req) {
    // initiates the Google OAuth2 login flow
  }

  @UseGuards(AuthGuard('google'))
  @Get('callback')
  async callback(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt)
        res.redirect('http://localhost:4200/login/succes/' + jwt);
    else
        res.redirect('http://localhost:4200/login/failure');
  }

}
