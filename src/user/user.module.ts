import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MarkerController } from '../marker/marker.controller';

@Module({
  controllers: [UserController, MarkerController],
  providers: [UserService],
})
export class UserModule {
  constructor(private userService: UserService) {}
}
