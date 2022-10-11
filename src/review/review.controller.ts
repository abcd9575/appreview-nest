import { Controller, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('review')
export class ReviewController {

    @UseGuards(JwtAuthGuard)
    @Get('file')
    async getFile() {
      const csvFilePath = 'appstore_544007664.csv';
      const csv = require('csvtojson');
      csv()
      .fromFile(csvFilePath)
      .then((jsonObj)=>{
          console.log(jsonObj);
    })
    const jsonArray=await csv().fromFile(csvFilePath);
    console.log(jsonArray)
  }
}
