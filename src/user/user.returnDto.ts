import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
export class UserReturnDto {
  constructor(user: User) {
    this.user_code = user.id;
    this.score = user.score;
  }
  @ApiProperty({
    description: '',
    example: '',
  })
  user_code: string;

  @ApiProperty({
    description: '',
    example: '',
  })
  score: string;
}
