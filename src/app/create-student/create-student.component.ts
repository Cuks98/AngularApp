import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { AddNewStudentRequest } from '../addNewStudentRequest';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{

  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
  }

  add(name: string, lastName: string, jmbag: string, ects: number) {
    const firstName = name.trim();
    lastName = lastName.trim();
    jmbag = jmbag.trim();
    if (!name || !lastName || !jmbag || !ects) { return; }

    const dateOfBirth = "1998-08-20";
    
    this.studentService.addStudent({ firstName, lastName, jmbag, ects, dateOfBirth } as AddNewStudentRequest).subscribe(response =>{
      this.ngOnInit()
    })
  }
}
