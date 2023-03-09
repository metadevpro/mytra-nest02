import { Test, TestingModule } from '@nestjs/testing';
import { CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

xdescribe('CatService', () => {
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

  it('should return 3 cats', async () => {
    expect((await service.getAll(0, 25)).length).toBe(3);
  });

  it('should return 4 cats after create', async () => {
    service.create({
      name: 'cat0',
    } as CreateCatDto);

    expect((await service.getAll(0, 25)).length).toBe(4);
  });
});
