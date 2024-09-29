import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import axios from 'axios';
import { CreateDatabaseDto } from './dto/create-database';

@Controller('')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('databases')
  getDatabases(): string {
    return this.databaseService.getHello();
  }

  @Get('/products')
  async getProducts(): Promise<any[]> {
    try {
      const tempUrl = 'http://localhost:23820/databases';
      const res = await axios(tempUrl);
      // const ret = await res.json();
      console.log('🚀 ~ AppController ~ getProducts ~ ret:', res);
    } catch (error) {
      console.log('🚀 ~ AppController ~ getProducts ~ error:', error);
    }
    return this.databaseService.getProducts();
  }

  @Post('database/:database_name')
  async createDatabase(
    @Param() params: any,
    @Body() createDatabaseDto: CreateDatabaseDto,
  ): Promise<any> {
    console.log(
      '🚀 ~ DatabaseController ~ createDatabaseDto:',
      params,
      createDatabaseDto,
    );

    return {
      error_code: 0,
    };
  }
}
