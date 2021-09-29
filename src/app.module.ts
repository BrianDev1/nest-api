import { StudentEntity } from './student/student.entity';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [LessonEntity, StudentEntity],
    }),
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
