import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MarkerService } from './marker.service';
import { MarkerReturnDto } from './marker.returnDto';
import { MarkerCreateDto } from './marker.createDto';
@ApiTags('marker')
@Controller('marker')
export class MarkerController {
  constructor(private markerService: MarkerService) {}
  @Get(':marker_id')
  @ApiOkResponse({
    description: '',
    type: MarkerReturnDto,
  })
  @ApiNotFoundResponse({ description: '' })
  async findMarker(
    @Param('marker_id', ParseUUIDPipe) id: string,
  ): Promise<MarkerReturnDto> {
    return this.markerService.findMarker(id);
  }
  @Get('')
  @ApiOkResponse({
    description: '',
    type: [MarkerReturnDto],
  })
  @ApiNotFoundResponse({ description: '' })
  async findAll(): Promise<MarkerReturnDto[]> {
    return this.markerService.findAll();
  }
  @Post('')
  @ApiCreatedResponse({
    description: '',
    type: MarkerReturnDto,
  })
  @ApiForbiddenResponse({ description: '' })
  async addMarker(@Body() Marker: MarkerCreateDto): Promise<MarkerReturnDto> {
    return this.markerService.addMarker(Marker);
  }
  @Delete(':marker_id')
  @ApiOkResponse({ description: '' })
  @ApiForbiddenResponse({
    description: '',
  })
  async deleteMarker(@Param('marker_id', ParseUUIDPipe) id: string) {
    await this.markerService.deleteMarker(id);
  }
  @Delete('')
  @ApiOkResponse({ description: '' })
  @ApiForbiddenResponse({
    description: '',
  })
  async deleteAll() {
    await this.markerService.deleteAll();
  }
  @Put(':marker_id')
  @ApiOkResponse({
    description: '',
    type: MarkerReturnDto,
  })
  @ApiForbiddenResponse({
    description: '',
  })
  async changeMarker(
    @Param('marker_id', ParseUUIDPipe) id: string,
    @Body() Marker: MarkerCreateDto,
  ): Promise<MarkerReturnDto> {
    return this.markerService.changeMarker(id, Marker);
  }
}
