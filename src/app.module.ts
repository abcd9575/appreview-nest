import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databases } from './config/databases';

// const defaultOptions = {
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: '1q2w3e$R',
//   database: 'appreview',
//   synchronize: true,
//   autoLoadEntities: true,
// };

@Module({
  imports: [AuthModule, 
    ReviewModule, 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({               
      imports: [ConfigModule],                 
      inject: [ConfigService],                 
      useFactory: async (configService: ConfigService) =>  
        databases.mysql(configService),
    })],
})
export class AppModule {}
