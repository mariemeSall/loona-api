import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubunitService } from './subunit.service';

@Controller('subunit')
export class SubunitController {
  constructor(private readonly subunitService: SubunitService) {}
  @Post()
  create(){
    return this.subunitService.create();
  }
  @Get()
  findAll() {
    return this.subunitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subunitService.findOne(+id);
  }


}
