import { Module } from '@nestjs/common';
import { SchemaFirstService } from './schema-first.service';
import { SchemaFirstResolver } from './schema-first.resolver';

@Module({
  providers: [SchemaFirstService, SchemaFirstResolver],
})
export class SchemaFirstModule {}
