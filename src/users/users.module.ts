import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { PostsService } from './services/posts/posts.service';
import { PostsController } from './controllers/posts/posts.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  controllers: [UsersController, PostsController],
  providers: [PostsService, UsersService],
})
export class UsersModule {}
