import { convertGqlLesson } from './../convert/lesson';
import { LessonEntity } from './lesson.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { SchoolLesson } from '../graphql.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLessons(): Promise<SchoolLesson[]> {
    try {
      const lessons = await this.lessonRepository.find();
      return lessons.map(convertGqlLesson);
    } catch (error) {
      throw new InternalServerErrorException('Unable to find lessons');
    }
  }

  async findLessonById(id: string): Promise<SchoolLesson> {
    try {
      const lessonFound = await this.lessonRepository.findOne({ id });
      return convertGqlLesson(lessonFound);
    } catch (error) {
      throw new InternalServerErrorException('Unable to find lesson');
    }
  }

  async createLesson(
    inputCreatelesson: CreateLessonDto,
  ): Promise<SchoolLesson> {
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
