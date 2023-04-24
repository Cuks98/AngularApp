import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { UpdateStudentRequest } from '../updateStudentRequest';
import { LabServiceService } from '../lab-service.service';
import { LabStudent } from '../labStudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  // @Input() student!: Student;
  student!: Student;
  labStudent!:LabStudent;
  jmbag!: string;
  constructor(private route: ActivatedRoute, 
    private studentService: StudentService, 
    private labStudentService: LabServiceService ) {
    
  }

  ngOnInit(): void {
    this.jmbag = this.route.snapshot.paramMap.get('jmbag') ?? "";
    if(this.jmbag != ""){
      var lastChar = this.jmbag.substr(this.jmbag.length - 1);
      console.log("zadnji =" + lastChar);
      var num = Number(lastChar);
      if(num % 2 == 0){
        console.log("parni");
        this.getStudent(this.jmbag)
      }else{
        console.log("neparni");
        this.getStudentNotEven(this.jmbag)
        console.log(this.labStudent)
      }
      // if(this.)
    }
  }

  getStudent(jmbag:string): void{
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(student => this.student = student);
  }

  getStudentEven(jmbag:string):void{
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(student => this.student = student);
  }

  getStudentNotEven(jmbag:string):void{
    this.labStudentService.getStudentByJmbag(jmbag).subscribe(student=>this.labStudent = student);
  }

  updateStudent(firstName: string, lastName:string, ects:number, jmbag: string) :void{
    const dateOfBirth = "1998-08-20";
    this.studentService.updateStudent({ firstName, lastName, jmbag, ects, dateOfBirth } as UpdateStudentRequest)
      .subscribe(response =>{
        this.ngOnInit()
      })
  }

}
