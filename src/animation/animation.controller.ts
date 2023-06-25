import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AnimationService } from './animation.service';
import { AnimationReturnDto } from './animation.returnDto';
import { AnimationCreateDto } from './animation.createDto';
@ApiTags('animation')
@Controller('animation')
export class AnimationController {
  constructor(private animationService: AnimationService) {}
  @Get(':animation_id')
  @ApiOkResponse({
    description: '',
    type: AnimationReturnDto,
  })
  @ApiNotFoundResponse({ description: '' })
  async findAnimation(
    @Param('animation_id', ParseUUIDPipe) id: string,
  ): Promise<AnimationReturnDto> {
    return this.animationService.findAnimation(id);
  }
  @Get('')
  @ApiOkResponse({
    description: '',
    type: [AnimationReturnDto],
  })
  @ApiNotFoundResponse({ description: '' })
  async findAll(): Promise<AnimationReturnDto[]> {
    return this.animationService.findAll();
  }
  // @Post('')
  // @ApiCreatedResponse({
  //   description: '',
  //   type: AnimationReturnDto,
  // })
  // @ApiForbiddenResponse({ description: '' })
  // async addAnimation(@Body() animation: AnimationCreateDto): Promise<AnimationReturnDto> {
  //   return this.animationService.addAnimation(animation);
  // }
  @Post('')
  @ApiCreatedResponse({ description: '' })
  @ApiForbiddenResponse({ description: '' })
  async addAnimation() {
    await this.animationService.addAnimation();
  }

  @Delete(':animation_id')
  @ApiOkResponse({ description: '' })
  @ApiForbiddenResponse({
    description: '',
  })
  async deleteAnimation(@Param('animation_id', ParseUUIDPipe) id: string) {
    await this.animationService.deleteAnimation(id);
  }
  @Delete('')
  @ApiOkResponse({ description: '' })
  @ApiForbiddenResponse({
    description: '',
  })
  async deleteAll() {
    await this.animationService.deleteAll();
  }
  @Put(':animation_id')
  @ApiOkResponse({ description: '' })
  @ApiForbiddenResponse({ description: '' })
  async changeAnimation(
    @Param('animation_id', ParseUUIDPipe) id: string,
    @Body() Animation: AnimationCreateDto,
  ) {
    await this.animationService.changeAnimation(id, Animation);
  }
}
