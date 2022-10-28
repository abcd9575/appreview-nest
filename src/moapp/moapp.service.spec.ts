import { Test, TestingModule } from '@nestjs/testing';
import { MoappService } from './moapp.service';

describe('MoappService', () => {
  let service: MoappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoappService],
    }).compile();

    service = module.get<MoappService>(MoappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
