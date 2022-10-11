
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy'; // ID PW 틀리면 Unauth 에러 리턴 / 맞으면 user
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy'; // added

@Module({
  imports: [
    UsersModule, 
    PassportModule,       // 어디에 쓰이는지 알아봐야함
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '600s'},
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService] // 어디에 쓰이는지 알아봐야함
})
export class AuthModule {}
