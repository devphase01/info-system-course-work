import { Column, Entity, OneToMany } from 'typeorm';

import { UserBase } from './base';
import { RoleType } from 'src/shared/interfaces';
import { RequestEntity, StrategyEntity } from '.';

@Entity({ name: 'User' })
export class UserEntity extends UserBase {
  @OneToMany(() => RequestEntity, (request) => request.user)
  requests: RequestEntity[];

  @OneToMany(() => StrategyEntity, (strategy) => strategy.user)
  strategies: StrategyEntity[];

  @Column({ default: 'user' })
  role: RoleType;
}
