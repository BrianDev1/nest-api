import { Lesson } from './../lesson/lesson.entity';

export const convertGqlLesson = (lessonEntity: Lesson) => {
  return {
    id: lessonEntity.id,
    name: lessonEntity.name,
    startDate: lessonEntity.startDate,
    endDate: lessonEntity.endDate,
  };
};
