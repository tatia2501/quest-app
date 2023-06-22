import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
export class UserReturnDto {
  constructor(user: User) {
    this.code = user.id;
  }
  @ApiProperty({
    description: '',
    example: '',
  })
  code: string;
}
