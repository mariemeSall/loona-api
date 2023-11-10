import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { MemberService } from './member.service';
import { TransformInterceptor } from "../../transform.interceptor";

@Controller('member')
@UseInterceptors(TransformInterceptor)
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

   @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get('/:number')
  findOne(@Param('number') number: string) {
    return this.memberService.findOne(+number);
  }

}
