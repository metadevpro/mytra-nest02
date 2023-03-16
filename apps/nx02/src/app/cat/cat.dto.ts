import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsMongoId, IsOptional, IsString, Min } from 'class-validator';
export class CreateCatDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({
    description: 'Edad del gato',
    default: 0,
    example: 4,
  })
  age?: number;

  @IsString({ message: 'Alimentacion erronea' })
  @IsOptional()
  @ApiProperty()
  breed?: string;
}

export class CatDto {
  @IsMongoId()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiProperty()
  age?: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  breed?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  color?: string;
}
