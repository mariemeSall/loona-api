import { Member } from "../../../artists/member/entities/member.entity";

export class CreateSongDto {
    title: string;
    album: number;
    audio: string;
    featuring?: number[]

}
