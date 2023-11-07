import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Album } from "./entities/album.entity";
import { MemberService } from "../../artists/member/member.service";
import { SubunitService } from "../../artists/subunit/subunit.service";
import { Member } from "../../artists/member/entities/member.entity";
import { Subunit } from "../../artists/subunit/entities/subunit.entity";
import { Song } from "../song/entities/song.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Album, Member, Subunit, Song])],
  controllers: [AlbumController],
  providers: [AlbumService, MemberService, SubunitService],
  exports:[AlbumService]
})
export class AlbumModule {}
