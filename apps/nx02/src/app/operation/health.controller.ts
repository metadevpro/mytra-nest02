import { Controller, Get, Head } from '@nestjs/common';

@Controller('health')
export class HealthController {
  // protegido con auth basic  JWT
  @Get()
  @Head()
  health() {
    return {
      status: 'degraded', //ok
      name: 'nx02',
      version: '1.2.3',
      configuration: {
        mongocnx: 'valor entorno',
      },
      checks: [
        { name: 'db', desc: 'DB is accesible.', result: true, ellapsedMs: 3 },
        {
          name: 'certs',
          desc: 'Certs present at /etc/certs.',
          result: true,
          ellapsedMs: 1,
        },
        {
          name: 'mailserver',
          error: 'Mail server not responding at mail.acme.com',
          result: false,
          ellapsedMs: 30000,
        },
      ],
    };
  }
}
