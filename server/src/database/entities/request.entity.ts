import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';

import { UserEntity } from '.';
import { EntityBase } from './base';

@Entity({ name: 'Requests' })
export class RequestEntity extends EntityBase {
  @Column()
  description: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  status: 'none' | 'pending' | 'closed';

  @ManyToOne(() => UserEntity, (user) => user.requests)
  user: UserEntity;
}
