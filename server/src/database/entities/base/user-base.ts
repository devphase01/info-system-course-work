import { Column, Index } from 'typeorm';

import { EntityBase } from '.';
import { RoleType } from 'src/shared/interfaces';

export abstract class UserBase extends EntityBase {
  @Column({ unique: true })
  @Index()
  email: string;

  @Column()
  password: string;

  @Column()
  role: RoleType;
}
