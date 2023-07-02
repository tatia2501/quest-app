import { User } from '@prisma/client';
export class UserReturnInfoDto {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.score = user.score;
  }
  id: string;
  name: string;
  score: string;
}
