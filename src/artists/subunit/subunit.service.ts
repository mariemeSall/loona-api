import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Subunit, SubUnitDTO } from "./entities/subunit.entity";
import { Repository } from "typeorm";
import { Member } from "../member/entities/member.entity";
import { MemberService } from "../member/member.service";

@Injectable()
export class SubunitService {
  constructor(
      @InjectRepository(Subunit)
      private subRepository: Repository<Subunit>,
      private memberService: MemberService,
  ) {
  }


  findAll() {
    return this.subRepository.find({order: { debut:"ASC"}});
  }

  findOne(id: number): Promise<Subunit> {
    return this.subRepository.findOne({relations : {members:true},where : {id}});
  }

}
