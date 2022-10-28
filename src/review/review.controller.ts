import { Controller, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  //@UseGuards(JwtAuthGuard)
  @Get('file')
  async review() {
    return this.reviewService.review();
  }

  //@UseGuards(JwtAuthGuard)
  @Get('db')
  async review_db() {
    return this.reviewService.review_db();
  }
}
