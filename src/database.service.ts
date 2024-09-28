import { Injectable } from '@nestjs/common';
import { data } from './products';

@Injectable()
export class DatabaseService {
  getHello(): string {
    return 'Hello database!';
  }
  getProducts(): any[] {
    return data.products;
  }
}
