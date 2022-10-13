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
  //imports: [AuthModule, UsersModule],
  //controllers: [AuthController],
  imports: [AuthModule, 
    ReviewModule, 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({               
      imports: [ConfigModule],                 
      inject: [ConfigService],                 
      useFactory: async (configService: ConfigService) =>  
        databases.mysql(configService),
      
      
        
    }),
    //TypeOrmModule.forFeature([User]),
    //TypeOrmModule.forFeature([Comment]),






    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   type: 'mysql',
    //   entities: [User], //To begin using the User entity, we need to let TypeORM know about it by inserting it into the entities array in the module forRoot() method options (unless you use a static glob path):
    // }),
    // TypeOrmModule.forRoot({
    //   ...defaultOptions,
    //   type: 'mysql',
    //   entities: [Comment], //To begin using the User entity, we need to let TypeORM know about it by inserting it into the entities array in the module forRoot() method options (unless you use a static glob path):
    // })
  ],
    
  //providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
