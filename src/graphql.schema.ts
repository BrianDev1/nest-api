
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

export interface InputSchemaFirst {
    name: string;
    someOtherProp?: Nullable<number>;
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
    findSchemaFirst(): SchemaFirst | Promise<SchemaFirst>;
    findAllSchemaFirst(): SchemaFirst[] | Promise<SchemaFirst[]>;
    findSpecificSchemaFirst(id: string): SchemaFirst | Promise<SchemaFirst>;
    findAllStudents(): Student[] | Promise<Student[]>;
    findStudent(id: string): Student | Promise<Student>;
}

export interface IMutation {
    createLesson(inputCreateLesson: InputCreateLesson): SchoolLesson | Promise<SchoolLesson>;
    createSchemaFirst(inputCreateSchema: InputSchemaFirst): SchemaFirst | Promise<SchemaFirst>;
    deleteSchemaFirst(id: string): string | Promise<string>;
    createStudent(inputCreateStudent: InputCreateStudent): Student | Promise<Student>;
}

export interface SchemaFirst {
    id: string;
    name: string;
    someOtherProp: number;
}

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
}

type Nullable<T> = T | null;
