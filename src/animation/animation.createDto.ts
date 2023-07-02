import { IsNotEmpty, IsString } from 'class-validator';
export class AnimationCreateDto {
  @IsString()
  @IsNotEmpty()
  animation: string;
  @IsString()
  @IsNotEmpty()
  position: string;
}
