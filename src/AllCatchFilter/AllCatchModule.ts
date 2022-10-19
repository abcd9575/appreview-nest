import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AllCatchFilter } from './AllCatchFilter';

@Module({
  providers: [AllCatchFilter],
  exports: [AllCatchFilter],
})
export class AllCatchModule {}
