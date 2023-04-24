import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../class';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-classes-component',
  templateUrl: './classes-component.component.html',
  styleUrls: ['./classes-component.component.css']
})
export class ClassesComponentComponent implements OnInit {
  /**
   *
   */
  classes: Class[]= [];
  jmbag!: string;
  student!: Student;
  temp!: Class;
  selectedClass!: Class;
  constructor(private route: ActivatedRoute, private studentService: StudentService,
    private classesService: ClassService) {
    
  }
  async ngOnInit(): Promise<void> {
    this.jmbag = this.route.snapshot.paramMap.get('jmbag') ?? "";
    if(this.jmbag != ""){
      this.getStudent(this.jmbag)
      console.log(this.student)
      this.getClasses()
    }
  }
  getStudent(jmbag:string): void{
    this.studentService.getStudentByJmbagFromApi(jmbag).subscribe(student => this.student = student);
  }

  getClasses(): void{
    this.student.classes.forEach(element => {
      this.classesService.getClassById(element.toString()).subscribe(x => this.temp )
      this.classes.push(this.temp)
    });
    console.log(this.classes);
  }

  onSelect(req: Class):void{

  }
  
}
