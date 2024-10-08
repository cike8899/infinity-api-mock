import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
    return this.appService.getProducts();
  }
}
