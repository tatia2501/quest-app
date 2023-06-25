import { Animation } from '@prisma/client';
export class AnimationReturnDto {
  constructor(marker: Animation) {
    this.id = marker.id;
    this.animation = marker.animation;
    this.position = marker.position;
  }
  id: string;
  animation: string;
  position: string;
}
