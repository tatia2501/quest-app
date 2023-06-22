import { ApiProperty } from '@nestjs/swagger';
import { Marker } from '@prisma/client';
export class MarkerReturnDto {
  constructor(marker: Marker) {
    this.id = marker.id;
    this.image = marker.image;
    this.text = marker.text;
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
  image: string;
  @ApiProperty({
    description: '',
    example: '',
  })
  text: string;
}
