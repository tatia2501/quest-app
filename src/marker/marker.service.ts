import { Injectable, NotFoundException } from '@nestjs/common';
import { MarkerReturnDto } from './marker.returnDto';
import { MarkerCreateDto } from './marker.createDto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class MarkerService {
  async findMarker(id: string): Promise<MarkerReturnDto> {
    return new MarkerReturnDto(
      await prisma.marker.findUniqueOrThrow({
        where: {
          id,
        },
      }),
    );
  }
  async findAll(): Promise<MarkerReturnDto[]> {
    const markers_arr = await prisma.marker.findMany();
    if (markers_arr == null) throw new NotFoundException();
    const markers = [];
    markers_arr.forEach((marker) => {
      markers[markers.length] = new MarkerReturnDto(marker);
    });
    return markers;
  }
  // async addMarker(marker: MarkerCreateDto): Promise<MarkerReturnDto> {
  //   return new MarkerReturnDto(
  //     await prisma.marker.create({
  //       data: {
  //         image: marker.image,
  //         text: marker.text,
  //       },
  //     }),
  //   );
  // }
  async addMarker() {
    await prisma.marker.create({
      data: {
        image: 'выберете изображение',
        text: 'введите текст',
      },
    });
  }
  async deleteMarker(id: string) {
    await prisma.marker.delete({
      where: {
        id,
      },
    });
  }

  async deleteAll() {
    await prisma.marker.deleteMany();
  }
  async changeMarker(id: string, marker: MarkerCreateDto) {
    await prisma.marker.update({
      where: {
        id,
      },
      data: {
        image: marker.image,
        text: marker.text,
      },
    });
  }
}
