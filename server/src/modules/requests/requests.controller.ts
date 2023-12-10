import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateRequestDto } from './dto';
import { UpdateRequestStatusDto } from './dto/update-request-status.dto';

import { ReqStatus } from 'src/shared/enums';

import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(@Query('userId') userId: string) {
    if (userId) {
      return this.requestsService.getAllByUserId(userId);
    }

    return this.requestsService.getAll();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateStatus(
    @Param('id') userId: string,
    @Body() { status }: UpdateRequestStatusDto,
  ) {
    if (!Object.values(ReqStatus).includes(status)) {
      throw new HttpException(
        'Unacceptable request status',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.requestsService.updateStatus(userId, status);
  }
}
