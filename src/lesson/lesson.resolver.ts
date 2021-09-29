import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';

@Resolver('Lesson')
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query('getLessons')
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Query('findLessonById')
  async findLessonById(@Args('id') id: string) {
    return await this.lessonService.findLessonById(id);
  }

  @Mutation('createLesson')
  createLesson(@Args('inputCreateLesson') inputCreateLesson: CreateLessonDto) {
    return this.lessonService.createLesson(inputCreateLesson);
  }
}
