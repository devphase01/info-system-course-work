import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';

import { UserEntity } from '.';
import { EntityBase } from './base';
import { ReqStatus } from 'src/shared/enums';

@Entity({ name: 'Requests' })
export class RequestEntity extends EntityBase {
  @Column()
  description: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: 'none' })
  status: ReqStatus;

  @ManyToOne(() => UserEntity, (user) => user.requests)
  user: UserEntity;
}
