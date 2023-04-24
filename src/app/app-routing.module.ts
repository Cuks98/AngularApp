import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StartComponent } from './start/start.component';
import { ClassesComponentComponent } from './classes-component/classes-component.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'detail/:jmbag', component: StudentDetailsComponent },
  { path: 'classes/:jmbag', component: ClassesComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
