import { InputCreateLesson } from './../../graphql.schema';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateLessonDto implements InputCreateLesson {
  @IsNotEmpty()
  @MinLength(4, { message: 'Lesson name must be longer than 4 characters' })
  name: string;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;
}
