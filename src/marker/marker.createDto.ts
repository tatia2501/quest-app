import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class MarkerCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '',
    example: '',
  })
  image: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '',
    example: '',
  })
  text: string;
}
