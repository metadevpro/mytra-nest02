import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/db.module';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
