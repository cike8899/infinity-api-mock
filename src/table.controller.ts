import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CreateTableDto, DropTableDto } from './dto/create-table';

@Controller('/databases')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get(':database_name/tables')
  async listTables(@Param() params: any): Promise<any> {
    return {
      error_code: 0,
      tables: this.databaseService.listTables(params.database_name),
    };
  }

  @Post(':database_name/tables/:table_name')
  async createTable(
    @Param() params: any,
    @Body() createDatabaseDto: CreateTableDto,
  ): Promise<any> {
    this.databaseService.createTable(
      params.database_name,
      params.table_name,
      createDatabaseDto,
    );

    return {
      error_code: 0,
    };
  }

  @Delete(':database_name/tables/:table_name')
  async dropTable(
    @Param() params: any,
    @Body() dropDatabaseDto: DropTableDto,
  ): Promise<any> {
    this.databaseService.dropTable(
      params.database_name,
      params.table_name,
      dropDatabaseDto,
    );

    return {
      error_code: 0,
    };
  }

  @Get(':database_name/tables/:table_name')
  async showTable(@Param() params: any): Promise<any> {
    const table = this.databaseService.showTable(
      params.database_name,
      params.table_name,
    );

    if (table) {
      return {
        error_code: 0,
        database_name: params.database_name,
        ...(table ?? {}),
      };
    }

    return {
      error_code: 3022,
      error_message: `Table ${params.table_name} doesn't exist in ${params.database_name}.`,
    };
  }
}
