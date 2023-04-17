import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StartComponent } from './start/start.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'detail/:jmbag', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
