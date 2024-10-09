import { Injectable } from '@nestjs/common';
import { data } from './products';
import { CreateTableDto, DropTableDto } from './dto/create-table';

@Injectable()
export class DatabaseService {
  databases = ['default_db', 'my_db'];
  tableContainer: Record<string, Array<any>> = {};

  listDatabase(): any[] {
    return this.databases;
  }
  createDatabase(database: string) {
    this.databases.push(database);
    this.tableContainer[database] = [];
  }
  dropDatabase(database: string) {
    const idx = this.databases.findIndex((x) => x === database);
    if (idx !== -1) {
      this.databases.splice(idx, 1);
      delete this.tableContainer[database];
    }
  }
  showDatabase(database: string) {
    const item = this.databases.find((x) => x === database);
    if (item) {
      return {
        database_name: database,
        storage_directory: '/var/infinity/data/nIHniKeHIB_db_default',
        table_count: '4',
      };
    }
  }

  listTables(database: string): any[] {
    return ['table_1', 'table_2', 'table_n'];
    return this.tableContainer[database];
  }
  createTable(
    databaseName: string,
    tableName: string,
    createDatabaseDto: CreateTableDto,
  ) {
    this.tableContainer[databaseName].push({
      name: tableName,
      ...createDatabaseDto,
    });
  }
  dropTable(
    databaseName: string,
    tableName: string,
    dropDatabaseDto: DropTableDto,
  ) {
    const tables = this.databases[databaseName];

    const idx = tables.findIndex((x) => x.name === tableName);

    if (idx !== -1) {
      tables.splice(idx, -1);
    }
  }
  showTable(databaseName: string, tableName: string) {
    const tables = this.tableContainer[databaseName];
    const table = tables.find((x) => x.name === tableName);
    return table;
  }
}
