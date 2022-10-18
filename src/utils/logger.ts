import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';
import { DailyRotateFileTransportOptions } from 'winston-daily-rotate-file';

export const dailyOptions = (): DailyRotateFileTransportOptions => ({
  datePattern: 'YYYY-MM-DD',
  dirname: './storage/logs',
  filename: '%DATE%.log',
  maxFiles: 30,
  zippedArchive: true,
});

export const logger = WinstonModule.createLogger({ // 얘를 app.module에 넣고싶으면 어떻게해야할까요
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
});
