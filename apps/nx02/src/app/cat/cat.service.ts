import { Injectable, NotFoundException } from '@nestjs/common';
import { CatDto, CreateCatDto } from './cat.dto';

@Injectable()
export class CatService {
  index = 1000;
  cats: CatDto[] = [
    { id: '1', name: 'Paco', color: 'Black' },
    { id: '2', name: 'Gardfield', color: 'Orange' },
    { id: '3', name: 'Missi', color: 'White' },
  ];

  getAll(): CatDto[] {
    return this.cats;
  }
  getById(id: string): CatDto | undefined {
    const cat = this.cats.find((c) => c.id === id);
    return cat;
  }

  create(cat: CreateCatDto): CatDto {
    const item = { ...cat, id: (this.index++).toString() };
    this.cats.push(item);
    return item;
  }

  update(cat: CatDto): CatDto {
    return cat;
  }
  delete(id: string): CatDto {
    const index = this.cats.findIndex((c) => c.id === id);
    if (index !== -1) {
      const cat = this.cats[index];
      this.cats.splice(index, 1);
      return cat;
    } else {
      throw new NotFoundException();
    }
  }
}
