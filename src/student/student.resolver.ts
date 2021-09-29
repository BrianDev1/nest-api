import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';

@Resolver('Student')
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentEntity])
  findAllStudents() {
    return this.studentService.findAllStudents();
  }

  @Mutation(() => StudentEntity)
  createStudent(
    @Args('inputCreateStudent') inputCreateStudent: CreateStudentDto,
  ) {
    return this.studentService.createStudent(inputCreateStudent);
  }
}
