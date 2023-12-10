import {
  Controller,
  Post,
  Body,
  HttpCode,
  Get,
  Param,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get()
  @HttpCode(200)
  getAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  @HttpCode(200)
  deleteById(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
