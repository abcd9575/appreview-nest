import {
  Controller,
  Request,
  UseGuards,
  Post,
  Get,
  StreamableFile,
  Res,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() user: User) {
    return this.authService.signup(user);
  }
}
