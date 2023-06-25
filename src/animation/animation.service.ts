import { Injectable, NotFoundException } from '@nestjs/common';
import { AnimationReturnDto } from './animation.returnDto';
import { AnimationCreateDto } from './animation.createDto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class AnimationService {
  async findAnimation(id: string): Promise<AnimationReturnDto> {
    return new AnimationReturnDto(
      await prisma.animation.findUniqueOrThrow({
        where: {
          id,
        },
      }),
    );
  }
  async findAll(): Promise<AnimationReturnDto[]> {
    const animations_arr = await prisma.animation.findMany();
    if (animations_arr == null) throw new NotFoundException();
    const animations = [];
    animations_arr.forEach((animation) => {
      animations[animations.length] = new AnimationReturnDto(animation);
    });
    return animations;
  }
  // async addAnimation(animation: AnimationCreateDto): Promise<AnimationReturnDto> {
  //   return new AnimationReturnDto(
  //     await prisma.animation.create({
  //       data: {
  //         animation: animation.animation,
  //         position: animation.position,
  //       },
  //     }),
  //   );
  // }
  async addAnimation() {
    await prisma.animation.create({
      data: {
        animation: 'выберете анимацию',
        position: 'введите координаты',
      },
    });
  }
  async deleteAnimation(id: string) {
    await prisma.animation.delete({
      where: {
        id,
      },
    });
  }

  async deleteAll() {
    await prisma.animation.deleteMany();
  }
  async changeAnimation(id: string, animation: AnimationCreateDto) {
    await prisma.animation.update({
      where: {
        id,
      },
      data: {
        animation: animation.animation,
        position: animation.position,
      },
    });
  }
}
