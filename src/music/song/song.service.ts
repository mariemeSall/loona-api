import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Album } from "../album/entities/album.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Song } from "./entities/song.entity";
import { Repository } from "typeorm";
import { AlbumService } from "../album/album.service";
import { MemberService } from "../../artists/member/member.service";

@Injectable()
export class SongService {
  constructor(
      @InjectRepository(Song)
      private songRepository : Repository<Song>,
      private albumService: AlbumService,
      private featService: MemberService,
  ){}
    async create(createSongDto: CreateSongDto) {
      let album : Album = await this.albumService.findOne(createSongDto.album);
      let songDTO: Song = {
        id:undefined,
        ...createSongDto,
        album,
        featuring:[],
      };
      if(createSongDto.featuring){
        for (const feat of createSongDto.featuring) {
          let feat_complet = await this.featService.findOne(feat)
          songDTO.featuring.push(feat_complet)
        }
      }

      return await this.songRepository.save(songDTO);
  }

  async findAll() {
    return await this.songRepository.find();
  }

  async findOne(id: number) {
    return await this.songRepository.findOne({relations:{featuring:true}, where:{id}});
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
