import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { TransformInterceptor } from "../../transform.interceptor";

@Controller('song')
@UseInterceptors(TransformInterceptor)
export class SongController {
  constructor(private readonly songService: SongService) {}

   @Get()
  findAll() {
    return this.songService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(+id);
  }

}
