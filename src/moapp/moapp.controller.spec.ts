import { Test, TestingModule } from '@nestjs/testing';
import { MoappController } from './moapp.controller';
import { MoappService } from './moapp.service';

describe('MoappController', () => {
  let controller: MoappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoappController],
      providers: [MoappService],
    }).compile();

    controller = module.get<MoappController>(MoappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
