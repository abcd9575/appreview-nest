import {
  Controller,
  Request,
  UseGuards,
  Get,
  Post,
  Body,
  Inject,
  UseFilters,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';
import { Logger as WinstonLogger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { AllCatchFilter } from 'src/AllCatchFilter/AllCatchFilter';

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

  @Get()
  @UseFilters(AllCatchFilter)
  error(foo: any): string {
    this.printWinstonLog('error'); //console.log(req);
    return foo.bar();
  }

  private printWinstonLog(req) {
    //console.log(this.logger.info);

    //this.logger.error('error: ', req);
    //this.logger.warn('warn: ', req);
    this.logger.info('info: ', req);
    //this.logger.http('http: ', req);
    //this.logger.verbose('verbose: ', req);
    //this.logger.debug('debug: ', req);
    //this.logger.silly('silly: ', req);
  }
}
