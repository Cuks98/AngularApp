import { LabStudent } from "./labStudent";
import { Student } from "./student";

export const STUDENTS: Student[] = [
    // {jmbag: "0123456789", ects: 120, shouldStudentPayFee: true, []},
    // {jmbag: "1083564765", ects: 10, shouldStudentPayFee: false, [1]},
    // {jmbag: "9930236720", ects: 100, shouldStudentPayFee: true, [1]},
    //{jmbag: "0096556578", ects: 300, shouldStudentPayFee: false, [1]}
]

export const LABSTUDENTS: LabStudent[] = [
    {jmbag: "0123456789", ects: 120, shouldStudentPayFee: true, classes: [], firstName: "Ivo", lastName: "Ivić", age: 20},
    {jmbag: "1083564765", ects: 10, shouldStudentPayFee: false, classes: [1], firstName: "Ivo", lastName: "Ivić", age: 20},
    {jmbag: "9930236720", ects: 100, shouldStudentPayFee: true, classes: [1], firstName: "Ivo", lastName: "Ivić", age: 20},
    {jmbag: "0246053233", ects: 300, shouldStudentPayFee: false, classes: [1], firstName: "Ivo", lastName: "Ivić", age: 20}
]