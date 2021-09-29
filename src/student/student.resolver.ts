import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Resolver('Student')
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation('createStudent')
  createStudent(
    @Args('inputCreateStudent') inputCreateStudent: CreateStudentDto,
  ) {
    return this.studentService.createStudent(inputCreateStudent);
  }
}
