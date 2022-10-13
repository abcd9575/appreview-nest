import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
    async review() {
        const csvFilePath = 'appstore_544007664.csv';
        const csv = require('csvtojson');
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                //console.log(jsonObj);
            })
        const jsonArray = await csv().fromFile(csvFilePath);
        return jsonArray;
    }
    async review_db() {
        const csvFilePath = 'appstore_544007664.csv';
        const csv = require('csvtojson');
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                console.log(jsonObj);
            })
        const jsonArray = await csv().fromFile(csvFilePath);
        return jsonArray;
    }
}
