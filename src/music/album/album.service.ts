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
      private unitService: SubunitService,
      private memberService: MemberService,
  ) {
  }
  async create(createAlbumDto: CreateAlbumDto) {
    let subunit: Subunit=null;
    let member: Member= null;
    if (!createAlbumDto.solo) {
      subunit = await this.unitService.findOne(createAlbumDto.artist)
    } else {
      member = await this.memberService.findOne(createAlbumDto.artist)
    }

    let albumDTO: Album = {
      id:undefined,
      title: createAlbumDto.title,
      date: new Date(createAlbumDto.date),
      songs:[],
      member,
      subunit
    }

    return await this.albumRepository.save(albumDTO);
  }

  async findAll() {
    return await this.albumRepository.find({relations:{songs:true}});
  }

  async findOne(id: number) {
    return await this.albumRepository.findOne({relations:{songs:true},where:{id}});
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
