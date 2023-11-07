import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { SubunitModule } from './subunit/subunit.module';

@Module({
  imports: [ SubunitModule, MemberModule]
})
export class ArtistsModule {}
