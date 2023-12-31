import { IsNotEmpty, IsString } from 'class-validator';
export class MarkerCreateDto {
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  text: string;
}
