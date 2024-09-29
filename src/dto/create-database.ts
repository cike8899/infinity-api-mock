enum CreateOption {
  Error = 'error',
  IgnoreIfExists = 'ignore_if_exists',
}

export class CreateDatabaseDto {
  create_option: CreateOption;
}
