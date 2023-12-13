import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto';
import { CreateUserDto } from '../users/dto';

import { IAuthCredentials } from './interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  public async login(loginDto: LoginDto): Promise<IAuthCredentials> {
    const { role, email, password, id } = await this.userService.findBy({
      email: loginDto.email,
    });
    const isValid = password === loginDto.password;

    if (!isValid) {
      throw new ForbiddenException('Invalid credentials');
    }

    return { userId: id, email, role };
  }

  public async register(
    createUserDto: CreateUserDto,
  ): Promise<IAuthCredentials> {
    const { id, email, role } = await this.userService.create(createUserDto);

    return { userId: id, email, role };
  }

  public async validate(userId: string) {
    return await this.userService.findById(userId);
  }
}
