import { Module } from '@nestjs/common';
import { catsProviders } from './cat.provider';
import { databaseProviders } from './db-providers';

@Module({
  providers: [...databaseProviders, ...catsProviders],
  exports: [...databaseProviders, ...catsProviders],
})
export class DatabaseModule {}
