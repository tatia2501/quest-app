import { IsNotEmpty, IsString } from 'class-validator';
export class UserCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
