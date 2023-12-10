import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserEntity } from 'src/database';

import { CreateUserDto } from './dto/create-user.dto';
import { UserRoles } from 'src/shared/enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (user) {
      throw new BadRequestException(
        `User with ${createUserDto.email} email is already exists.`,
      );
    }

    if (!Object.values(UserRoles).includes(createUserDto.role)) {
      createUserDto.role = UserRoles.USER;
    }

    const newUser = this.userRepository.create(createUserDto);

    await this.userRepository.save(newUser);

    return newUser;
  }

  public async findOne(id: string) {
    try {
      return await this.userRepository.findOneBy({ id });
    } catch (err) {
      // TODO: Handle such errors with Filter
      if (err.message.includes('invalid input syntax')) {
        throw new NotFoundException(`User with id ${id} does not exist.`);
      }

      throw err;
    }
  }

  public async findAll() {
    return this.userRepository.find();
  }

  public async delete(id: string) {
    try {
      await this.userRepository.delete({ id });
    } catch (error) {
      if (error.message.includes('invalid input syntax')) {
        throw new NotFoundException(`User with id ${id} does not exist.`);
      }

      throw error;
    }
  }
}
