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
  ){}
     async findAll() {
    return await this.songRepository.find();
  }

  async findOne(id: number) {
    return await this.songRepository.findOne({relations:{featuring:true}, where:{id}});
  }

}
