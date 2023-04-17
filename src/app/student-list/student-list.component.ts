import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  
  students: Student[] = [];
  selectedStudent!: Student;
  
  /**
   *
   */
  constructor(private studentService: StudentService, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(): void{
    this.studentService.getStudentsFromApi().subscribe(students => this.students = students);
  }
  onSelect(student: Student){
    console.log(student.jmbag);
    this.selectedStudent = student;
    this.router.navigate(['/detail', student.jmbag])
  }

  delete(student: Student){
    console.log("student to delete jmbag = " + student.jmbag);
    const response = this.studentService.deleteStudent(student.jmbag).subscribe(result => {
      this.ngOnInit();
    });
    console.log(response);
    
  }
}
