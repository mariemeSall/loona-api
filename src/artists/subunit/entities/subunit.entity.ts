import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../../member/entities/member.entity";
import { Artist } from "../../artist.interface";

@Entity()
export class Subunit extends  Artist{
    @ManyToMany(()=> Member)
    @JoinTable({
        name: 'subunit_members',
        joinColumn: {
            name: 'subunit_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'member_id',
            referencedColumnName: 'id',
        },
    })
    members: Member[];
}

export class SubUnitDTO {
    id?: number;
    name:string;
    debut: Date;
    picture?: string;
    members: number[];

}
