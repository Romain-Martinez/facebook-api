import { Body, Controller, Post } from '@nestjs/common';
import { UpdateUserDto } from '../dto/';
import { CreateUserDto } from '../dto/';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}
