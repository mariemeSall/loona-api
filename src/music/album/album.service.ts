import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Album } from "./entities/album.entity";
import { Repository } from "typeorm";
import { MemberService } from "../../artists/member/member.service";
import { SubunitService } from "../../artists/subunit/subunit.service";
import { Member } from "../../artists/member/entities/member.entity";
import { Subunit } from "../../artists/subunit/entities/subunit.entity";

@Injectable()
export class AlbumService {
  constructor(
      @InjectRepository(Album)
      private albumRepository: Repository<Album>,
  ) {
  }


  async findAll() {
    return await this.albumRepository.find({order: {date:"ASC"}});
  }

  async findOne(id: number) {
    return await this.albumRepository.findOne({relations:["songs", "songs.featuring", "member", "subunit"],where:{id}});
  }

}
