import { Module } from '@nestjs/common';
import { DatabaseController } from './table.controller';
import { TableService } from './table.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DatabaseController],
  providers: [TableService],
})
export class TableModule {}
