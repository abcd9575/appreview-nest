import {
  Controller,
  Request,
  UseGuards,
  Post,
  Body,
  Inject,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: WinstonLogger,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    this.printWinstonLog(req.user); //console.log(req);
    return this.authService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() user: User) {
    this.printWinstonLog(user); //console.log(req);
    return this.authService.signup(user);
  }

  private printWinstonLog(param) {
    //console.log(this.logger.info);

    //this.logger.error('error: ', param);
    //this.logger.warn('warn: ', param);
    this.logger.info('info: ', param);
    //this.logger.http('http: ', param);
    //this.logger.verbose('verbose: ', param);
    //this.logger.debug('debug: ', param);
    //this.logger.silly('silly: ', param);
  }
}
