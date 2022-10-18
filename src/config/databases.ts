import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

// const sqlite: TypeOrmModuleOptions = {
//   type: 'sqlite',
//   database: 'db.sqlite',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
// };

const mysql = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get('DB_HOST'), // 'localhost',
  database: configService.get('DB_DATABASE'), //'appreview',
  username: configService.get('DB_USERNAME'), //'root',
  password: configService.get('DB_PASSWORD'), //'1q2w3e$R',
  port: parseInt(configService.get('DB_PORT')), // 3306,
  //entities: configService.get('DB_ENTITY1'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: !!configService.get('DB_SYNC'), // true,
  logging: true,
});

export const databases = {
  //   sqlite,
  mysql,
};
