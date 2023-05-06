import { Course } from "./course";

export interface Student {
    jmbag: string,
    ects: number,
    shouldStudentPayFee: boolean,
    classes: number[],
    gender: string,
    address: string,
    city: string,
    courses: Course[]
}
