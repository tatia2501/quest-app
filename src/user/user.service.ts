import { Injectable } from '@nestjs/common';
import { UserReturnDto } from './user.returnDto';
import { UserCreateDto } from './user.createDto';
import { PrismaClient } from '@prisma/client';
import { UserReturnInfoDto } from './user.returnInfoDto';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async addUser(user: UserCreateDto): Promise<UserReturnDto> {
    return new UserReturnDto(
      await prisma.user.create({
        data: {
          name: user.name,
          password: user.password,
          score: '0',
        },
      }),
    );
  }

  async findUser(user: UserCreateDto): Promise<UserReturnDto> {
    return new UserReturnDto(
      await prisma.user.findFirst({
        where: {
          name: user.name,
          password: user.password,
        },
      }),
    );
  }

  async findAll(): Promise<UserReturnInfoDto[]> {
    const users_arr = await prisma.user.findMany();
    // if (users_arr == null) throw new NotFoundException();
    const users = [];
    users_arr.forEach((special) => {
      users[users.length] = new UserReturnInfoDto(special);
    });
    return users;
  }

  async deleteUser(id: string) {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async deleteAll() {
    await prisma.user.deleteMany();
  }

  async changeScore(id: string, score: string) {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        score: score,
      },
    });
  }
}
