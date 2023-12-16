import {
  Controller,
  Post,
  Body,
  HttpCode,
  Get,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteById(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
