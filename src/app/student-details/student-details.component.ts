import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { UpdateStudentRequest } from '../updateStudentRequest';
import { LabServiceService } from '../lab-service.service';
import { LabStudent } from '../labStudent';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  // @Input() student!: Student;
  student!: Student;
  labStudent!: LabStudent;
  jmbag!: string;
  courses!: Course[];
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private labStudentService: LabServiceService,
    private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.jmbag = this.route.snapshot.paramMap.get('jmbag') ?? "";
    this.getStudent(this.jmbag);
    this.getCourses(this.jmbag);
  }

  getStudent(jmbag: string): void {
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(
      (student) => {
        this.student = student
      });
  }

  getCourses(jmbag: string): void{
    this.courseService.getCoursesByJmbag(jmbag).subscribe(
      (courses)=>{
        this.courses = courses
      }
    )
  }

  getStudentEven(jmbag: string): void {
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(student => this.student = student);
  }

  getStudentNotEven(jmbag: string): void {
    this.labStudentService.getStudentByJmbag(jmbag).subscribe(student => this.labStudent = student);
  }

  updateStudent(firstName: string, lastName: string, ects: number, jmbag: string): void {
    const dateOfBirth = "1998-08-20";
    this.studentService.updateStudent({ firstName, lastName, jmbag, ects, dateOfBirth } as UpdateStudentRequest)
      .subscribe(response => {
        this.ngOnInit()
      })
  }

}
