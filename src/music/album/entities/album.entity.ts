import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subunit } from "../../../artists/subunit/entities/subunit.entity";
import { Member } from "../../../artists/member/entities/member.entity";
import { Song } from "../../song/entities/song.entity";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column({type:"date"})
    date: Date ;

    @ManyToOne(()=> Subunit)
    subunit: Subunit ;

    @ManyToOne(()=> Member)
    member: Member ;

    @OneToMany(()=> Song, (song)=>song.album)
    songs : Song[];

}
