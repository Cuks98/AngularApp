import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursses: Course[] = []
  private baseUrl = 'http://localhost:8080/api/course';

  constructor(private http: HttpClient) { }

  getCoursesByJmbag(jmbag: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/get-all-by-student-jmbag/${jmbag}`)
      .pipe(
        tap(_ => console.log("fatching students")),
        catchError(this.handleError<Course[]>('getStudents', []))
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
