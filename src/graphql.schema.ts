
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Lesson {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
}

export interface IQuery {
    getLessons(): Lesson[] | Promise<Lesson[]>;
}

type Nullable<T> = T | null;
