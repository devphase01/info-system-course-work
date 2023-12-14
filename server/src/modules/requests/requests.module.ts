import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { DataModule } from 'src/database/database.module';
import { RequestEntity } from 'src/database';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [DataModule.forFeature([RequestEntity]), UsersModule],
  controllers: [RequestsController],
  providers: [RequestsService],
  exports: [RequestsService],
})
export class RequestsModule {}
