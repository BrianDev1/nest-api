import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Lesson')
export class LessonResolver {
  constructor() {}

  @Query('getLessons')
  getLessons() {
    return {
      id: 'Blah',
      name: 'haha',
      startDate: new Date(),
      endDate: new Date(),
    };
  }
}
