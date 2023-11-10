import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "./entities/member.entity";
import { Repository } from "typeorm";

@Injectable()
export class MemberService {
  constructor(
      @InjectRepository(Member)
      private memberRepository: Repository<Member>
  ) {
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
