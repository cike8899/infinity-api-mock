import { Injectable } from '@nestjs/common';
import { data } from './products';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProducts(): any[] {
    return data.products;
  }
}
