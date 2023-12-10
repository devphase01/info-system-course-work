import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { DataModule } from 'src/database/database.module';
import { RequestEntity } from 'src/database';

@Module({
  imports: [DataModule.forFeature([RequestEntity])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
