import { IsInt, IsMongoId, IsOptional, IsString, Min } from 'class-validator';
export class CreateCatDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsString()
  @IsOptional()
  breed?: string;
}

export class CatDto {
  @IsMongoId()
  id: string;

  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  breed?: string;

  @IsString()
  @IsOptional()
  color?: string;
}
