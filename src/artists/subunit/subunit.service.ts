import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Subunit, SubUnitDTO } from "./entities/subunit.entity";
import { Repository } from "typeorm";
import { Member } from "../member/entities/member.entity";
import { MemberService } from "../member/member.service";

const subUnits: SubUnitDTO[] = [
    {
  id:undefined,
  name:"Loona",
  picture: undefined,
  debut:new Date("2018-08-20"),
  members: [1,2,3,4,5,6,7,8,9,10,11,12],
},
  {
    id:undefined,
    name:"1/3",
    picture:undefined,
    debut: new Date("2017-03-12"),
    members: [1,2,3,5]
  },
  {
    id:undefined,
    name:"Odd Eye Circle",
    picture: undefined,
    debut:new Date("2017-09-21"),
    members: [6,7,8],
  },
  {
    id:undefined,
    name:"yyxy",
    picture:undefined,
    debut: new Date("2017-11-14"),
    members: [9,10,11,12]
  },
  {
    id:undefined,
    name:"ARTMS",
    picture: undefined,
    debut:undefined,
    members: [1,3,6,7,8],
  },
  {
    id:undefined,
    name:"Loossemble",
    picture:undefined,
    debut: new Date("2023-09-15"),
    members: [2,4,5,11,12]
  },
]
@Injectable()
export class SubunitService {
  constructor(
      @InjectRepository(Subunit)
      private subRepository: Repository<Subunit>,
      private memberService: MemberService,
  ) {
  }

  async create() {
    for (const sub of subUnits) {
      let members: Member[]= [];
      for (const member of sub.members) {
        members.push(await this.memberService.findOne(member))
      }
      let subUnit: Subunit = {
        ...sub,
        id: undefined,
        picture:undefined,
        members
      }
      await this.subRepository.save(subUnit)

    }
    return "SubUnits initialized"
  }

  findAll() {
    return this.subRepository.find();
  }

  findOne(id: number): Promise<Subunit> {
    return this.subRepository.findOne({relations : {members:true},where : {id}});
  }

}
