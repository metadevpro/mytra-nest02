import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CatDto, CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  create(@Body() payload: CreateCatDto) {
    // todo ...
  }

  @Get()
  findAll(): CatDto[] {
    return this.catService.getAll();
  }

  @Get(':id')
  findOne(@Param() params, @Res() res: Response) {
    const id = params.id;
    const cat = this.catService.getById(id);

    if (cat) {
      // return cat;
      res.status(200).json(cat).end();
    } else {
      // 404 Not found
      res.status(404).end();
      //return;
    }
  }

  @Get('v2/:id')
  findOne2(@Param() params): CatDto {
    const id = params.id;
    const cat = this.catService.getById(id);

    if (cat) {
      return cat;
    } else {
      throw new NotFoundException();
    }
  }
}
