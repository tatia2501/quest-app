import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class AnimationCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '',
    example: '',
  })
  animation: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '',
    example: '',
  })
  position: string;
}
