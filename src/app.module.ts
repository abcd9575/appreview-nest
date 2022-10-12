import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
//import { UsersModule } from './users/users.module';
import { ReviewModule } from './review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';


@Module({
  //imports: [AuthModule, UsersModule],
  //controllers: [AuthController],
  imports: [AuthModule, 
    ReviewModule, 
    //MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1q2w3e$R',
      database: 'appreview',
      entities: [User], //To begin using the User entity, we need to let TypeORM know about it by inserting it into the entities array in the module forRoot() method options (unless you use a static glob path):
      synchronize: true,
    })],
  //providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
