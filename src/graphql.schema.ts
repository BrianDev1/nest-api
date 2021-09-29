
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface InputCreateLesson {
    name?: Nullable<string>;
    startDate?: Nullable<Date>;
    endDate?: Nullable<Date>;
}

export interface InputCreateStudent {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export interface SchoolLesson {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
}

export interface IQuery {
    getLessons(): SchoolLesson[] | Promise<SchoolLesson[]>;
    findLessonById(id: string): SchoolLesson | Promise<SchoolLesson>;
}

export interface IMutation {
    createLesson(inputCreateLesson: InputCreateLesson): SchoolLesson | Promise<SchoolLesson>;
    createStudent(inputCreateStudent: InputCreateStudent): Student | Promise<Student>;
}

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
}

type Nullable<T> = T | null;
