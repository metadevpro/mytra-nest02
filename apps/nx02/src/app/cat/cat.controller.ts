import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LimitValuePipe } from '../pipes/limit-value/limit-value.pipe';
import { OperationId } from '../security/operation-id.decorator';
import { Roles } from '../security/roles.decorator';
import { ERoles } from '../security/roles.enum';
import { CatDto, CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Roles(ERoles.Admin, ERoles.Finance, ERoles.Operator)
  @OperationId('cat-create')
  @Post()
  create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }

  // Pipe de validacion aplicado solo aqui
  // @Post()
  // create(@Body(new ValidationPipe()) cat: CreateCatDto) {
  //   return this.catService.create(cat);
  // }

  @Get()
  findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query(
      'limit',
      new DefaultValuePipe(25),
      ParseIntPipe,
      new LimitValuePipe(500)
    )
    limit: number
  ): CatDto[] {
    return this.catService.getAll(offset, limit);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) idNumber: number,
    @Res() res: Response
  ): void {
    const id = idNumber.toString();
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
