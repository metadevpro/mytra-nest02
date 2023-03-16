import { Controller, Get } from '@nestjs/common';

@Controller('version')
export class VersionController {
  @Get()
  getVersion() {
    return {
      name: 'nx02',
      version: '1.2.3',
      ts: new Date().toISOString(),
    };
  }
}
