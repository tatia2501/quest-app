import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseUUIDPipe, Put
} from "@nestjs/common";
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
  // @ApiCreatedResponse({
  //   description: '',
  //   type: UserReturnDto,
  // })
  // @ApiForbiddenResponse({ description: '' })
  async addUser(@Body() user: UserCreateDto): Promise<UserReturnDto> {
    return this.userService.addUser(user);
  }

  @Get('')
  // @ApiOkResponse({
  //   description: '',
  //   type: UserReturnDto,
  // })
  // @ApiNotFoundResponse({ description: '' })
  async findAll(): Promise<UserReturnInfoDto[]> {
    return this.userService.findAll();
  }

  @Get('')
  async findUser(@Body() user: UserCreateDto): Promise<UserReturnDto> {
    return this.userService.findUser(user);
  }

  @Delete(':user_id')
  // @ApiOkResponse({ description: '' })
  // @ApiForbiddenResponse({ description: '' })
  async deleteUser(@Param('user_id', ParseUUIDPipe) id: string) {
    await this.userService.deleteUser(id);
  }

  @Delete('')
  // @ApiOkResponse({ description: '' })
  // @ApiForbiddenResponse({ description: '' })
  async deleteAll() {
    await this.userService.deleteAll();
  }

  @Put(':user_id')
  // @ApiOkResponse({
  //   description: '',
  //   type: SpecialOfferReturnDto,
  // })
  // @ApiForbiddenResponse({
  //   description: '',
  // })
  async changeScore(
    @Param('user_id', ParseUUIDPipe) id: string,
    @Param('score') score: string,
  ) {
    await this.userService.changeScore(id, score);
  }
}
