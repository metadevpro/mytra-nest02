import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatService],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 3 cats', () => {
    expect(service.getAll().length).toBe(3);
  });

  it('should return 4 cats after create', () => {
    service.create({
      name: 'cat0',
    } as CreateCatDto);

    expect(service.getAll().length).toBe(4);
  });
});
