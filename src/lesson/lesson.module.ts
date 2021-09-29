import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { LessonEntity } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity])], // Lesson Entity inside
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
