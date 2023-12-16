import { Module } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { StrategiesController } from './strategies.controller';
import { StrategyEntity } from 'src/database';
import { DataModule } from 'src/database/database.module';
import { RequestsModule } from '../requests/requests.module';

@Module({
  imports: [DataModule.forFeature([StrategyEntity]), RequestsModule],
  controllers: [StrategiesController],
  providers: [StrategiesService],
})
export class StrategiesModule {}
