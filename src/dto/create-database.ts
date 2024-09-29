enum CreateOption {
  Error = 'error',
  IgnoreIfExists = 'ignore_if_exists',
}

enum DropOption {
  Error = 'error',
  IgnoreIfNotExists = 'ignore_if_not_exists',
}

export class CreateDatabaseDto {
  create_option: CreateOption;
}

export class DropDatabaseDto {
  drop_option: DropOption;
}
