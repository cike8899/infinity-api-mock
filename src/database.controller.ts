import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';
import axios from 'axios';

@Controller('/database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  getHello(): string {
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
}
