import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Название команды',
    example: 'Спелая вишня',
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Пароль',
    example: 'qwerty',
  })
  password: string;
}
