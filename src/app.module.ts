import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
//import { UsersModule } from './users/users.module';
import { ReviewModule } from './review/review.module';

@Module({
  //imports: [AuthModule, UsersModule],
  //controllers: [AuthController],
  imports: [AuthModule, ReviewModule],
  //providers: [AppService],
})
export class AppModule {}
