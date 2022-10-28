import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMoappDto } from './dto/create-moapp.dto';
import { UpdateMoappDto } from './dto/update-moapp.dto';
import { Moapp } from './entities/moapp.entity';

@Injectable()
export class MoappService {
  constructor(
    @InjectRepository(Moapp) private MoappRepository: Repository<Moapp>,
  ) {
    this.MoappRepository = MoappRepository;
  }

  create(createMoappDto: CreateMoappDto) {
    return 'This action adds a new moapp';
  }

  async findAll()/*: Promise<Moapp[]> */{
    return this.MoappRepository.find();
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
