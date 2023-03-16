import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LimitValuePipe } from '../pipes/limit-value/limit-value.pipe';
import { OperationId } from '../security/operation-id.decorator';
import { Roles } from '../security/roles.decorator';
import { ERoles } from '../security/roles.enum';
import { CatDto, CreateCatDto } from './cat.dto';
import { CatService } from './cat.service';

@ApiTags('animal')
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Roles(ERoles.Admin, ERoles.Finance, ERoles.Operator)
  @OperationId('cat-create')
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() cat: CreateCatDto): Promise<CatDto> {
    return await this.catService.create(cat);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async update(@Param('id') id: string, @Body() cat: CatDto): Promise<CatDto> {
    return await this.catService.update(id, cat);
  }

  // Pipe de validacion aplicado solo aqui
  // @Post()
  // create(@Body(new ValidationPipe()) cat: CreateCatDto) {
  //   return this.catService.create(cat);
  // }

  @Get()
  async findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query(
      'limit',
      new DefaultValuePipe(25),
      ParseIntPipe,
      new LimitValuePipe(500)
    )
    limit: number
  ): Promise<CatDto[]> {
    return await this.catService.getAll(offset, limit);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully found.',
  })
  @ApiResponse({ status: 404, description: 'Not found.' })
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const cat = await this.catService.getById(id);

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
  async findOne2(@Param() params): Promise<CatDto> {
    const id = params.id;
    const cat = await this.catService.getById(id);

    if (cat) {
      return cat;
    } else {
      throw new NotFoundException();
    }
  }
}
