import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentManagerComponent } from './student-manager/student-manager.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path:'',redirectTo:'student/admin',pathMatch:'full'
  },
  {
    path:'student/admin',component:StudentManagerComponent
  },
  {
    path:'student/add',component:AddStudentComponent
  },
  {
    path:'student/update/:Id',component:UpdateStudentComponent
  },
  {
    path:'student/view/:studentId',component:ViewStudentComponent
  },
  {
    path:'**',component:PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
