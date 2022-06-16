import { Injectable, Param } from '@nestjs/common';
import { UserDto } from 'src/users/dto/User';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  getUsers(): UserDto[] {
    return this.users;
  }

  createUser(user: UserDto) {
    this.users.push(user);
  }

  getUserByUsername(username: string): UserDto | undefined {
    return this.users.find((user) => user.username === username);
  }
}
