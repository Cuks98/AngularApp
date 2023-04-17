import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  // @Input() student!: Student;
  student!: Student;
  jmbag!: string;
  constructor(private route: ActivatedRoute, private studentService: StudentService ) {
    
  }

  ngOnInit(): void {
    this.jmbag = this.route.snapshot.paramMap.get('jmbag') ?? "";
    if(this.jmbag != ""){
      this.getStudent(this.jmbag)
    }
  }

  getStudent(jmbag:string): void{
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(student => this.student = student);
  }

}
