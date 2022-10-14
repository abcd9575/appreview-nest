import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {
    this.reviewRepository = reviewRepository;
  }

  async review() {
    const csvFilePath = 'appstore_544007664.csv';
    const csv = require('csvtojson');
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
  }

  async review_db(): Promise<Review[]> {
    return this.reviewRepository.find();
  }
}
