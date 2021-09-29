import { IsNotEmpty } from 'class-validator';
import { InputCreateStudent } from './../../graphql.schema';

export class CreateStudentDto implements InputCreateStudent {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
