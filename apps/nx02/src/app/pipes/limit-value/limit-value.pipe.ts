import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LimitValuePipe implements PipeTransform {
  constructor(private limit: number) {}

  transform(value: number, metadata: ArgumentMetadata) {
    return this.limit < value ? this.limit : Math.abs(value);
  }
}
