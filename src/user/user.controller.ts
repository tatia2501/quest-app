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
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('')
  @ApiCreatedResponse({
    description: 'New user was created',
    type: UserReturnDto,
  })
  @ApiForbiddenResponse({ description: 'New user wasnt created' })
  async addUser(@Body() user: UserCreateDto): Promise<UserReturnDto> {
    return this.userService.addUser(user);
  }

  @Get('')
  @ApiOkResponse({
    description: 'Users info was given',
    type: [UserReturnInfoDto],
  })
  @ApiNotFoundResponse({ description: 'Users info wasnt found' })
  async findAll(): Promise<UserReturnInfoDto[]> {
    return this.userService.findAll();
  }

  @Get('/:name')
  @ApiOkResponse({
    description: 'Users info was given',
    type: UserReturnDto,
  })
  @ApiNotFoundResponse({ description: 'Users info wasnt found' })
  async findUser(
    @Param('name') name: string,
    @Query('password') password: string,
  ): Promise<UserReturnDto> {
    return this.userService.findUser(name, password);
  }

  @Get('/check/:name')
  @ApiOkResponse({
    description: 'User was found',
    type: UserReturnInfoDto,
  })
  @ApiNotFoundResponse({ description: 'User wasnt found' })
  async checkUser(@Param('name') name: string): Promise<UserReturnInfoDto> {
    return this.userService.checkUser(name);
  }

  @Delete(':user_id')
  @ApiOkResponse({ description: 'User was deleted' })
  @ApiForbiddenResponse({ description: 'User wasnt deleted' })
  async deleteUser(@Param('user_id', ParseUUIDPipe) id: string) {
    await this.userService.deleteUser(id);
  }

  @Delete('')
  @ApiOkResponse({ description: 'Users were deleted' })
  @ApiForbiddenResponse({ description: 'Users werent deleted' })
  async deleteAll() {
    await this.userService.deleteAll();
  }

  @Put(':user_id')
  @ApiOkResponse({ description: 'Score was changed' })
  @ApiForbiddenResponse({ description: 'Score wasnt changed' })
  async changeScore(
    @Param('user_id', ParseUUIDPipe) id: string,
    @Query('score') score: string,
  ) {
    await this.userService.changeScore(id, score);
  }
}
