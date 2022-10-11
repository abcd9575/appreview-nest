import { Controller, Request, UseGuards, Post, Get, StreamableFile, Res } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService
      ) {}
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){
      return this.authService.login(req.user);
    }


  //   @UseGuards(JwtAuthGuard)
  //   @Get('file')
  //   async getFile() {
  //     const csvFilePath = 'appstore_544007664.csv';
  //     const csv = require('csvtojson');
  //     csv()
  //     .fromFile(csvFilePath)
  //     .then((jsonObj)=>{
  //         console.log(jsonObj);
  //   })
  //   const jsonArray=await csv().fromFile(csvFilePath);
  //   console.log(jsonArray)
  // }
}