import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateRequestDto } from './dto';
import { ReqStatus } from 'src/shared/enums';

import { RequestEntity } from 'src/database';
import { UsersService } from '../users/users.service';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(RequestEntity)
    private requestRepository: Repository<RequestEntity>,
    private readonly userService: UsersService,
  ) {}

  public async getAll() {
    return await this.requestRepository.find();
  }

  public async getAllByUserId(id: string) {
    try {
      return await this.requestRepository.findBy({ user: { id } });
    } catch (error) {
      if (error.message.includes('invalid input syntax')) {
        return [];
      }

      throw error;
    }
  }

  public async create(createRequestDto: CreateRequestDto) {
    const { userId, ...requestBody } = createRequestDto;
    const user = await this.userService.findById(userId);

    const request = this.requestRepository.create({
      user,
      ...requestBody,
    });

    await this.requestRepository.save(request);

    return request;
  }

  public async updateStatus(id: string, status: ReqStatus) {
    const request = await this.requestRepository.findOneBy({ id });

    if (!request) {
      throw new NotFoundException(`Request with id #${id} does not exist.`);
    }

    request.status = status;

    await this.requestRepository.save(request);

    return request;
  }
}
