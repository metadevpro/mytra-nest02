import { Controller, Get, Head } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  @Head()
  ping() {
    return { message: 'pong' };
  }
}
