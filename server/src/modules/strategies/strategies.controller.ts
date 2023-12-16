import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { CreateStrategyDto } from './dto';

@Controller('strategies')
export class StrategiesController {
  constructor(private readonly strategiesService: StrategiesService) {}

  @Get()
  getAll() {
    return this.strategiesService.getAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() createStrategyDto: CreateStrategyDto) {
    return this.strategiesService.create(createStrategyDto);
  }
}
