import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { TableModule } from './table.module';

@Module({
  imports: [DatabaseModule, TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
