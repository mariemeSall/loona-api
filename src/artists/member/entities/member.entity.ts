import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Artist } from "../../artist.interface";

@Entity()
export class Member extends Artist{
    @Column()
    number: number;

    @Column()
    nationality: string;

    @Column()
    color: string;

    @Column()
    shape: string;

    @Column()
    animal: string;

    @Column({nullable:true})
    country?: string;

    @Column({nullable:true})
    power?: string;

    @Column({nullable:true})
    fruit?: string;
}
