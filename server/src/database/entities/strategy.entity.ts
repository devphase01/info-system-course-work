import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';

import { EntityBase } from './base';
import { RequestEntity, UserEntity } from '.';

@Entity({ name: 'Strategies' })
export class StrategyEntity extends EntityBase {
  @Column()
  description: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column()
  status: 'rejected' | 'pending' | 'approved';

  @ManyToOne(() => RequestEntity)
  request: RequestEntity;

  @ManyToOne(() => UserEntity, (user) => user.strategies)
  user: UserEntity;
}
