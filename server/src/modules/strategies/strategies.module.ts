import { Module } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { StrategiesController } from './strategies.controller';
import { StrategyEntity } from 'src/database';
import { DataModule } from 'src/database/database.module';

@Module({
  imports: [DataModule.forFeature([StrategyEntity])],
  controllers: [StrategiesController],
  providers: [StrategiesService],
})
export class StrategiesModule {}
