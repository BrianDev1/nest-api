import { LessonEntity } from './../lesson/lesson.entity';

export const convertGqlLesson = (lessonEntity: LessonEntity) => {
  return {
    id: lessonEntity.id,
    name: lessonEntity.name,
    startDate: lessonEntity.startDate,
    endDate: lessonEntity.endDate,
  };
};
