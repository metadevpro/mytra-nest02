import {
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { CatDto, CreateCatDto } from './cat.dto';

@Injectable()
export class CatService implements OnModuleInit {
  // index = 1000;
  // cats: CatDto[] = [
  //   { id: '1', name: 'Paco', color: 'Black' },
  //   { id: '2', name: 'Gardfield', color: 'Orange' },
  //   { id: '3', name: 'Missi', color: 'White' },
  // ];

  constructor(@Inject('CAT_MODEL') private catModel: Model<CatDto>) {}

  onModuleInit() {
    console.log('ModuleInit en CatService');
  }

  async getAll(offset: number, limit: number): Promise<CatDto[]> {
    // todo: offset. limit
    // implementacion en memoria
    // return this.cats; // .skip(offset).take(limit);

    // 2. implementacion con Mongoose
    return this.catModel.find().limit(limit).skip(offset).exec();
  }
  async getById(id: string): Promise<CatDto | undefined> {
    // const cat = this.cats.find((c) => c.id === id);
    // return cat;
    const obj = await this.catModel.findById(id).exec();
    return obj;
  }

  async create(cat: CreateCatDto): Promise<CatDto> {
    // const item = { ...cat, id: (this.index++).toString() };
    // this.cats.push(item);
    // return item;

    const item = new this.catModel(cat);
    return await item.save();
  }

  async update(id: string, cat: CatDto): Promise<CatDto> {
    // return cat;
    const obj = await this.catModel.findById(id).exec();
    if (!obj) {
      throw new NotFoundException();
    }
    obj.name = cat.name;
    obj.color = cat.color;
    obj.breed = cat.breed;
    return await obj.save();
  }
  async delete(id: string): Promise<CatDto> {
    // const index = this.cats.findIndex((c) => c.id === id);
    // if (index !== -1) {
    //   const cat = this.cats[index];
    //   this.cats.splice(index, 1);
    //   return cat;
    // } else {
    //   throw new NotFoundException();
    // }
    const obj = await this.catModel.findById(id).exec();
    if (!obj) {
      throw new NotFoundException();
    }
    await this.catModel.findOneAndRemove({ id: id }).exec();
    return obj;
  }
}
