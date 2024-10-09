import { Injectable } from '@nestjs/common';
import { data } from './products';

@Injectable()
export class TableService {
  tableContainer: Record<string, any> = {};
  // listTables(database_name: string): any[] {
  //   return this.databases;
  // }
  // createTable(database: string) {
  //   this.databases.push(database);
  // }
  // dropTable(database: string) {
  //   const idx = this.databases.findIndex((x) => x === database);
  //   if (idx !== -1) {
  //     this.databases.splice(idx, 1);
  //   }
  // }
  // showTable(database: string) {
  //   const item = this.databases.find((x) => x === database);
  //   if (item) {
  //     return {
  //       database_name: database,
  //       storage_directory: '/var/infinity/data/nIHniKeHIB_db_default',
  //       table_count: '4',
  //     };
  //   }
  // }
}
