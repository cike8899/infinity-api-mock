import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import axios from 'axios';
import { CreateDatabaseDto, DropDatabaseDto } from './dto/create-database';

@Controller('/databases')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getDatabases(): Promise<any> {
    return {
      error_code: 0,
      databases: this.databaseService.getDatabases(),
    };
  }

  @Post(':database_name')
  async createDatabase(
    @Param() params: any,
    @Body() createDatabaseDto: CreateDatabaseDto,
  ): Promise<any> {
    console.log(
      '🚀 ~ DatabaseController ~ createDatabaseDto:',
      params,
      createDatabaseDto,
    );

    this.databaseService.createDatabase(params.database_name);

    return {
      error_code: 0,
    };
  }

  @Delete(':database_name')
  async dropDatabase(
    @Param() params: any,
    @Body() dropDatabaseDto: DropDatabaseDto,
  ): Promise<any> {
    console.log(
      '🚀 ~ DatabaseController ~ createDatabaseDto:',
      params,
      dropDatabaseDto,
    );

    this.databaseService.dropDatabase(params.database_name);

    return {
      error_code: 0,
    };
  }
}
