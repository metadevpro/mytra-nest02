import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { configuration } from './config/configuration';
import { LoggerMiddleware } from './middleware/log.middleware';
import { HealthController } from './operation/health.controller';
import { PingController } from './operation/ping.controller';
import { VersionController } from './operation/version.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    // SharedModule,
    CatModule,
  ],
  controllers: [
    AppController,
    VersionController,
    PingController,
    HealthController,
  ],
  providers: [AppService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cat');
  }
}
