import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "./entities/member.entity";
import { Repository } from "typeorm";



const members: Member[] = [
    {
    id:undefined,
    number:1,
    name: "Heejin",
    animal: "Lapin",
    color:"Rose",
    country:"France",
    debut:new Date("2016-10-04"),
    nationality:"kr",
    picture:undefined,
    shape:"Carre",
    fruit:undefined,
    power: undefined
},{
    id:undefined,
    number:2,
    name: "Hyunjin",
    animal: "Chat",
    color:"Jaune",
    country:"Japon",
    debut:new Date("2016-11-16"),
    nationality:"kr",
    picture:undefined,
    shape:"Carre",
    fruit:undefined,
    power: undefined
},{
    id:undefined,
    number:3,
    name: "Haseul",
    animal: "Lapin",
    color:"Vert",
    country:"Iceland",
    debut:new Date("2016-12-08"),
    nationality:"kr",
    picture:undefined,
    shape:"Carre",
    fruit:undefined,
    power: undefined
},{
    id:undefined,
    number:4,
    name: "Yeonjin",
    animal: "Grenouille",
    color:"Orange",
    country:"Taiwan",
    debut:new Date("2017-01-15"),
    nationality:"kr",
    picture:undefined,
    shape:"Losange",
    fruit:undefined,
    power: undefined
},{
    id:undefined,
    number:5,
    name: "Vivi",
    animal: "Cerf",
    color:"Rose pastel",
    country:"Hong Kong",
    debut:new Date("2017-04-16"),
    nationality:"ch",
    picture:undefined,
    shape:"Carre",
    fruit:undefined,
    power: undefined
},{
    id:undefined,
    number:6,
    name: "Kim Lip",
    animal: "Hibou",
    color:"Rouge",
    country:undefined,
    debut:new Date("2017-05-25"),
    nationality:"kr",
    picture:undefined,
    shape:"Rond",
    fruit:undefined,
    power: "Vitesse"
},{
    id:undefined,
    number:7,
    name: "Jinsoul",
    animal: "Combattant",
    color:"Bleu",
    country:undefined,
    debut:new Date("2017-06-25"),
    nationality:"kr",
    picture:undefined,
    shape:"Rond",
    fruit:undefined,
    power: "Teleportation"
},{
    id:undefined,
    number:8,
    name: "Choerry",
    animal: "Chauve-Souris",
    color:"Violet",
    country:undefined,
    debut:new Date("2017-07-27"),
    nationality:"kr",
    picture:undefined,
    shape:"Rond",
    fruit:"Cerise",
    power: "Voyage Dimentionel"
},{
    id:undefined,
    number:9,
    name: "Yves",
    animal: "Cygne",
    color:"Bordeaux",
    country:undefined,
    debut:new Date("2017-11-27"),
    nationality:"kr",
    picture:undefined,
    shape:"Triangle",
    fruit:"Pomme",
    power: undefined
},{
    id:undefined,
    number:10,
    name: "Chuu",
    animal: "Manchot",
    color:"Peche",
    country:undefined,
    debut:new Date("2017-12-27"),
    nationality:"kr",
    picture:undefined,
    shape:"Triangle",
    fruit:"Fraise",
    power: undefined
},{
    id:undefined,
    number:11,
    name: "Gowon",
    animal: "Papillon",
    color:"Turquoise",
    country:undefined,
    debut:new Date("2018-01-29"),
    nationality:"kr",
    picture:undefined,
    shape:"Triangle Inverse",
    fruit:"Ananas",
    power: undefined
},{
    id:undefined,
    number:12,
    name: "Hyeju",
    animal: "Loup",
    color:"Gris",
    country:undefined,
    debut:new Date("2018-04-17"),
    nationality:"kr",
    picture:undefined,
    shape:"Triangle",
    fruit:"Peche",
    power: undefined
},
]
@Injectable()
export class MemberService {
  constructor(
      @InjectRepository(Member)
      private memberRepository: Repository<Member>
  ) {
  }

  async create(){
      for (const member of members) {
          await this.memberRepository.save(member)

      }
      return "Members initialized"
  }

  async findAll(): Promise<Member[]> {
    return await this.memberRepository.find({order:{number:"ASC"}});
  }

  async findOne(number: number): Promise<Member> {
    return await this.memberRepository.findOne(
        {
          "where":{
          number
          }}
    );
  }


}
