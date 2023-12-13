import { RoleType } from 'src/shared/interfaces';

export interface IAuthCredentials {
  email: string;
  userId: string;
  role: RoleType;
}
