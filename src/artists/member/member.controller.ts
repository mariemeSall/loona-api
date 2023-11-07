import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(){
      return this.memberService.create();
  }
  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get('/:number')
  findOne(@Param('number') number: string) {
    return this.memberService.findOne(+number);
  }

}
