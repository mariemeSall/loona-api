import { Module } from '@nestjs/common';
import { SubunitService } from './subunit.service';
import { SubunitController } from './subunit.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Subunit } from "./entities/subunit.entity";
import { Member } from "../member/entities/member.entity";
import { MemberService } from "../member/member.service";

@Module({
  imports: [TypeOrmModule.forFeature([Subunit, Member])],
  controllers: [SubunitController],
  providers: [SubunitService, MemberService],
  exports: [SubunitService]
})
export class SubunitModule {}
