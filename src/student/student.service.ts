import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../graphql.schema';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentEntity } from './student.entity';
import { convertGqlStudent } from '../convert/student';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async createStudent(inputCreateStudent: CreateStudentDto): Promise<Student> {
    const createStudent = this.studentRepository.create({
      id: uuid(),
      firstName: inputCreateStudent.firstName,
      lastName: inputCreateStudent.lastName,
    });

    try {
      const newStudent = await this.studentRepository.save(createStudent);
      return convertGqlStudent(newStudent);
    } catch (error) {
      throw new InternalServerErrorException('Unable to create student');
    }
  }
}
