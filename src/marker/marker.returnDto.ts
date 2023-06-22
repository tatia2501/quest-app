import { ApiProperty } from '@nestjs/swagger';
import { Marker } from '@prisma/client';
export class MarkerReturnDto {
  constructor(marker: Marker) {
    this.image = marker.image;
    this.text = marker.text;
  }
  @ApiProperty({
    description: '',
    example: '',
  })
  image: string;
  @ApiProperty({
    description: '',
    example: '',
  })
  text: string;
}
