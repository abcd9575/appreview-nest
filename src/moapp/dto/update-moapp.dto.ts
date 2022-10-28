import { PartialType } from '@nestjs/mapped-types';
import { CreateMoappDto } from './create-moapp.dto';

export class UpdateMoappDto extends PartialType(CreateMoappDto) {}
