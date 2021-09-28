import { convertGqlLesson } from './../convert/lesson';
import { Lesson } from './lesson.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { InputCreateLesson, SchoolLesson } from '../graphql.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getLessons(): Promise<SchoolLesson[]> {
    try {
      const lessons = await this.lessonRepository.find();
      return lessons.map(convertGqlLesson);
    } catch (error) {
      throw new InternalServerErrorException('Unable to find lessons');
    }
  }

  async findLessonById(id: string) {
    console.log(id);
    try {
      const lessonFound = await this.lessonRepository.findOne({ id });
      return convertGqlLesson(lessonFound);
    } catch (error) {
      throw new InternalServerErrorException('Unable to find lesson ', error);
    }
  }

  async createLesson(inputCreatelesson: InputCreateLesson) {
    const createdLesson = this.lessonRepository.create({
      id: uuid(),
      name: inputCreatelesson.name,
      startDate: new Date(),
      endDate: new Date(),
    });

    try {
      return await this.lessonRepository.save(createdLesson);
    } catch (error) {
      throw new InternalServerErrorException('Unable to create lesson');
    }
  }
}
