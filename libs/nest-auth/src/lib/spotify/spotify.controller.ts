import { Controller, Get, Post, Request, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/spotify')
export class SpotifyController {

  @UseGuards(AuthGuard('spotify'))
  @Get()
  async login(@Request() req) {
    // initiates the spotify OAuth2 login flow
  }

  @UseGuards(AuthGuard('spotify'))
  @Get('callback')
  async callback(@Req() req, @Res() res) {
    // handles the spotify OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt)
        res.redirect('http://localhost:4200/login/succes/' + jwt);
    else
        res.redirect('http://localhost:4200/login/failure');
  }

}
