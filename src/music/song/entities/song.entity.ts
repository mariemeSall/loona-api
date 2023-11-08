import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "../../album/entities/album.entity";
import { Member } from "../../../artists/member/entities/member.entity";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @ManyToOne(()=> Album)
    album: Album;

    @Column()
    audio : string;

    @ManyToMany(()=> Member)
    @JoinTable({
        name: 'featuring',
        joinColumn: {
            name: 'song_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'member_id',
            referencedColumnName: 'id',
        },
    })
    featuring: Member[];
}
