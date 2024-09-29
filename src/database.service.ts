import { Injectable } from '@nestjs/common';
import { data } from './products';

@Injectable()
export class DatabaseService {
  databases = ['default_db', 'my_db'];
  getHello(): string {
    return 'Hello database!';
  }
  getDatabases(): string[] {
    return this.databases;
  }
  createDatabase(database: string) {
    this.databases.push(database);
  }
  dropDatabase(database: string) {
    const idx = this.databases.findIndex((x) => x === database);
    if (idx !== -1) {
      this.databases.splice(idx, 1);
    }
  }
}
