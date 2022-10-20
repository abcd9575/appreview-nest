import { utilities } from 'nest-winston';
import * as winston from 'winston';
import { DailyRotateFileTransportOptions } from 'winston-daily-rotate-file';

export const dailyOptions = (): DailyRotateFileTransportOptions => ({
  datePattern: 'YYYY-MM-DD',
  dirname: './storage/logs',
  filename: '[appreview-nest]-%DATE%.log',
  maxFiles: 30,
  zippedArchive: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    utilities.format.nestLike('appreview-nest', {
      prettyPrint: true,
    }),
  ),
});
