import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
export class UserReturnInfoDto {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.score = user.score;
  }
  @ApiProperty({
    description: '',
    example: '',
  })
  id: string;
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
