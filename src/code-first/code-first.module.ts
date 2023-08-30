import { Module } from '@nestjs/common';
import { CodeFirstService } from './code-first.service';
import { CodeFirstResolver } from './code-first.resolver';

@Module({
  providers: [CodeFirstService, CodeFirstResolver],
})
export class CodeFirstModule {}
