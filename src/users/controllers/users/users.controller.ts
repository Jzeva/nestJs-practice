import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from 'src/users/dto/User';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createNewUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    return user ? user : 'Not Found';
  }
}
