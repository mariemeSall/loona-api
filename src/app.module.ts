import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { MusicModule } from './music/music.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "./artists/member/entities/member.entity";
import { Subunit } from "./artists/subunit/entities/subunit.entity";
import { Song } from "./music/song/entities/song.entity";
import { Album } from "./music/album/entities/album.entity";

@Module({
  imports: [ArtistsModule, MusicModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 8082,
    username: 'loona',
    password: 'loona12345',
    database: 'loona',
    entities: [Member, Subunit, Song, Album],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
