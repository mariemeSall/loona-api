import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { TransformInterceptor } from "../../transform.interceptor";

@Controller('album')
@UseInterceptors(TransformInterceptor)
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  findAll() {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(+id);
  }

  @Get('/member/:id')
  findMember(@Param('id') id: string){
    return this.albumService.findByMember(+id);
  }
  @Get('/subunit/:id')
  findSubUnit(@Param('id') id: string){
    return this.albumService.findBySubUnit(+id);
  }

}
