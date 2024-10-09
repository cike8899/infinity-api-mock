enum CreateOption {
  Error = 'error',
  IgnoreIfExists = 'ignore_if_exists',
}

enum DropOption {
  Error = 'error',
  IgnoreIfNotExists = 'ignore_if_not_exists',
}

export class CreateTableDto {
  create_option: CreateOption;
  fields: Array<{ name: string; type: string; default: any }>;
}

export class DropTableDto {
  drop_option: DropOption;
}
