import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { configuration } from './config/configuration';
import { LoggerMiddleware } from './middleware/log.middleware';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SharedModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cat');
  }
}
