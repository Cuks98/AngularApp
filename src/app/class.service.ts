import { Injectable } from '@angular/core';
import { Class } from './class';
import { Observable, of, throwError } from 'rxjs';
import { CLASSES } from './mock-classes';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private classes: Class[] = []
  constructor() { }

  getClases(): Observable<Class[]>{
    this.classes = CLASSES;
    return of(this.classes)
  }

  getClassById(id: string): Observable<Class>{
    this.classes = CLASSES;
    const found = this.classes.find(x => x.id.toString() === id);
    if (found) {
      return of(found);
    } else {
      return throwError(`Student with jmbag ${id} not found`);
    }
  }
}
