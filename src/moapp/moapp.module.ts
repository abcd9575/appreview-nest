import { Module } from '@nestjs/common';
import { MoappService } from './moapp.service';
import { MoappController } from './moapp.controller';

@Module({
  controllers: [MoappController],
  providers: [MoappService]
})
export class MoappModule {}
