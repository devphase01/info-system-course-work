import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StrategyEntity } from 'src/database';
import { Repository } from 'typeorm';
import { CreateStrategyDto } from './dto';
import { RequestsService } from '../requests/requests.service';
import { ReqStatus } from 'src/shared/enums';

@Injectable()
export class StrategiesService {
  constructor(
    @InjectRepository(StrategyEntity)
    private strategyRepository: Repository<StrategyEntity>,
    private readonly requestService: RequestsService,
  ) {}

  public async getAll() {
    return await this.strategyRepository.find();
  }

  public async create(createStrategyDto: CreateStrategyDto) {
    const { description, requestId } = createStrategyDto;

    const request = await this.requestService.getById(requestId);
    const strategy = this.strategyRepository.create({
      description,
      request,
      status: 'pending',
    });

    await this.strategyRepository.save(strategy);

    request.status = ReqStatus.CLOSED;
    await this.requestService.save(request);
  }
}
