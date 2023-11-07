import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Song } from "./entities/song.entity";
import { AlbumService } from "../album/album.service";
import { MemberService } from "../../artists/member/member.service";
import { Album } from "../album/entities/album.entity";
import { Member } from "../../artists/member/entities/member.entity";
import { SubunitService } from "../../artists/subunit/subunit.service";
import { Subunit } from "../../artists/subunit/entities/subunit.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Song, Album, Member, Subunit])],
  controllers: [SongController],
  providers: [SongService, AlbumService, MemberService, SubunitService],
})
export class SongModule {}
