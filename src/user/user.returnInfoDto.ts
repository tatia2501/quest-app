import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
export class UserReturnInfoDto {
  constructor(user: User) {
    this.name = user.name;
    this.score = user.score;
  }
  @ApiProperty({
    description: '',
    example: '',
  })
  name: string;
  @ApiProperty({
    description: '',
    example: '',
  })
  score: string;
}
