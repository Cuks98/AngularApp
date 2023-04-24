import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LabStudent } from './labStudent';
import { LABSTUDENTS } from './mock-students';

@Injectable({
  providedIn: 'root'
})
export class LabServiceService {

  students: LabStudent[] = [];
  constructor() { }

  getStudentByJmbag(jmbag: string): Observable<LabStudent> {
    this.students = LABSTUDENTS;
    const student = this.students.find(student => student.jmbag === jmbag);
    if (student) {
      return of(student);
    } else {
      return throwError(`Student with jmbag ${jmbag} not found`);
    }
  }
}
