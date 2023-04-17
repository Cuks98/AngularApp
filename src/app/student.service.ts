import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddNewStudentRequest } from './addNewStudentRequest';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = []
  private baseUrl = 'http://localhost:8080/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    this.students = STUDENTS;
    return of(this.students)
  }

  getStudentByJmbag(jmbag: string): Observable<Student> {
    this.students = STUDENTS;
    const student = this.students.find(student => student.jmbag === jmbag);
    if (student) {
      return of(student);
    } else {
      return throwError(`Student with jmbag ${jmbag} not found`);
    }
  }

  getStudentsFromApi(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/get-students`)
      .pipe(
        tap(_ => console.log("fatching students")),
        catchError(this.handleError<Student[]>('getStudents', []))
      )
  }

  getStudentByJmbagFromApi(jmbag: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/get-student/${jmbag}`)
      .pipe(
        tap(_ => console.log("fatching student")),
        catchError(this.handleError<Student>('getStudent'))
      )
  }

  deleteStudent(jmbag: string): Observable<number> {
    return this.http.delete(`${this.baseUrl}/delete-student/${jmbag}`, { observe: 'response' })
      .pipe(
        tap(_ => console.log("fatching students")),
        map(response => response.status),
        catchError(this.handleError<number>('getStudents', 0)),
      );
  }

  addStudent(request: AddNewStudentRequest): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/add-new-student`, request)
      .pipe(
        tap(_ => console.log("adding student")),
        catchError(this.handleError<Student>('getStudent'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
