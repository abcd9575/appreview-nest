
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy'; // ID PW 틀리면 Unauth 에러 리턴 / 맞으면 user
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy'; // added
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    UsersModule, 
    PassportModule,       // 어디에 쓰이는지 알아봐야함
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '600s'},
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1q2w3e$R',
      database: 'appreview',
      entities: [User], //To begin using the User entity, we need to let TypeORM know about it by inserting it into the entities array in the module forRoot() method options (unless you use a static glob path):
      synchronize: true,
      autoLoadEntities: true,

    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService] // 어디에 쓰이는지 알아봐야함
})
export class AuthModule {
  constructor(private dataSource: DataSource) {}
}
