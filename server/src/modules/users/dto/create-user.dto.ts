import { UserRoles } from 'src/shared/enums';

export class CreateUserDto {
  role: UserRoles;
  email: string;
  password: string;
}
