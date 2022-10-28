import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoappService } from './moapp.service';
import { CreateMoappDto } from './dto/create-moapp.dto';
import { UpdateMoappDto } from './dto/update-moapp.dto';

@Controller('moapp')
export class MoappController {
  constructor(private readonly moappService: MoappService) {}

  @Post()
  create(@Body() createMoappDto: CreateMoappDto) {
    return this.moappService.create(createMoappDto);
  }

  @Get()
  findAll() {
    return this.moappService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moappService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoappDto: UpdateMoappDto) {
    return this.moappService.update(+id, updateMoappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moappService.remove(+id);
  }
}
