import { Roles } from 'src/shared/enums';

export class CreateUserDto {
  role: Roles;
  email: string;
  password: string;
}
