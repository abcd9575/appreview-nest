import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databases } from './config/databases';
import * as winston from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';
import { dailyOptions } from './utils/logger';
import { AllCatchFilter } from './AllCatchFilter/AllCatchFilter';
import { APP_FILTER } from '@nestjs/core';
import { AllCatchModule } from './AllCatchFilter/AllCatchModule';
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
  imports: [
    AllCatchModule,
    AuthModule,
    ReviewModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        databases.mysql(configService),
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'dev' ? 'info' : 'silly',
          format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.timestamp(),
            utilities.format.nestLike('appreview-nest', {
              prettyPrint: true,
            }),
          ),
        }),
        new winstonDailyRotateFile(dailyOptions()),
      ],
    }),
    AllCatchModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllCatchFilter,
    },
  ],
})
export class AppModule {}
