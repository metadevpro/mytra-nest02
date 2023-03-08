export class CreateCatDto {
  name: string;
  age?: number;
  breed?: string;
}

export class CatDto {
  id: string;
  name: string;
  age?: number;
  breed?: string;
  color?: string;
}
