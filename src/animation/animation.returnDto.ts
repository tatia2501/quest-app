import { ApiProperty } from '@nestjs/swagger';
import { Animation } from '@prisma/client';
export class AnimationReturnDto {
  constructor(marker: Animation) {
    this.id = marker.id;
    this.animation = marker.animation;
    this.position = marker.position;
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
  animation: string;
  @ApiProperty({
    description: '',
    example: '',
  })
  position: string;
}
