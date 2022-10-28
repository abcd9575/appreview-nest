import { Module } from '@nestjs/common';
import { MoappService } from './moapp.service';
import { MoappController } from './moapp.controller';
import { Moapp } from './entities/moapp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Moapp])],
  controllers: [MoappController],
  providers: [MoappService],
})
export class MoappModule {}
