import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserEntity } from 'src/database';

import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from 'src/shared/enums';

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

    if (!Object.values(Roles).includes(createUserDto.role)) {
      createUserDto.role = Roles.USER;
    }

    const newUser = this.userRepository.create(createUserDto);

    await this.userRepository.save(newUser);

    return newUser;
  }

  public async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }

    return user;
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
