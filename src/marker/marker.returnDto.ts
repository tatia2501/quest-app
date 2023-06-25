import { Marker } from '@prisma/client';
export class MarkerReturnDto {
  constructor(marker: Marker) {
    this.id = marker.id;
    this.image = marker.image;
    this.text = marker.text;
  }

  id: string;

  image: string;

  text: string;
}
