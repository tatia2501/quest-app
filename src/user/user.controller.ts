import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserReturnDto } from './user.returnDto';
import { UserCreateDto } from './user.createDto';
import { UserReturnInfoDto } from './user.returnInfoDto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('')
  async addUser(@Body() user: UserCreateDto): Promise<UserReturnDto> {
    return this.userService.addUser(user);
  }

  @Get('')
  async findAll(): Promise<UserReturnInfoDto[]> {
    return this.userService.findAll();
  }

  @Get('/:name')
  async findUser(
    @Param('name') name: string,
    @Query('password') password: string,
  ): Promise<UserReturnDto> {
    return this.userService.findUser(name, password);
  }

  @Get('/check/:name')
  async checkUser(@Param('name') name: string): Promise<UserReturnInfoDto> {
    return this.userService.checkUser(name);
  }

  @Delete(':user_id')
  async deleteUser(@Param('user_id', ParseUUIDPipe) id: string) {
    await this.userService.deleteUser(id);
  }

  @Delete('')
  async deleteAll() {
    await this.userService.deleteAll();
  }

  @Put(':user_id')
  async changeScore(
    @Param('user_id', ParseUUIDPipe) id: string,
    @Query('score') score: string,
  ) {
    await this.userService.changeScore(id, score);
  }
}
