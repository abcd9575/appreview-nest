import { Injectable } from '@nestjs/common';
import { CreateMoappDto } from './dto/create-moapp.dto';
import { UpdateMoappDto } from './dto/update-moapp.dto';

@Injectable()
export class MoappService {
  create(createMoappDto: CreateMoappDto) {
    return 'This action adds a new moapp';
  }

  findAll() {
    return `This action returns all moapp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moapp`;
  }

  update(id: number, updateMoappDto: UpdateMoappDto) {
    return `This action updates a #${id} moapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} moapp`;
  }
}
