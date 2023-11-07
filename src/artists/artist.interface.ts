import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true, nullable: false})
    name: string;

    @Column({nullable:true})
    picture: string;

    @Column({type:"date", nullable:true})
    debut: Date;

}
