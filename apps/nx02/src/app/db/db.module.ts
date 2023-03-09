import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { catsProviders } from './cat.provider';
import { databaseProviders } from './db-providers';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProviders, ...catsProviders],
  exports: [...databaseProviders, ...catsProviders],
})
export class DatabaseModule {}
