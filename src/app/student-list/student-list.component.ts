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
  tempList: Student[] = [];
  studentsLab: Student[] = [];
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

  sortAsc(): void{
    console.log("sort asc clicked");
    this.students.sort((a, b) => a.ects > b.ects ? -1 : 1 )
  }
  sortDesc(): void{
    console.log("sort desc clicked");
    this.students.sort((a, b) => a.ects > b.ects ? 1 : -1 )
  }
  filter(str:string):void{
    console.log("filter")
    if(str==""){
     this.getStudents()
     return
    }
    this.students.forEach(element => {
      if(element.jmbag.includes(str)){
        this.tempList.push(element)
      }
    });
    this.students = []
    this.students = this.tempList
    this.tempList = []
  }

  getStudentsByGender(request:string):void{
    this.studentService.getByGender(request).subscribe(students => this.studentsLab = students);
  }

  getStudentsByCity(request:string):void{
    this.studentService.getByCity(request).subscribe(students => this.studentsLab = students);
  }

  refresh():void{
    this.ngOnInit()
  }
  
}
