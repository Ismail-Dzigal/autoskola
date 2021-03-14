import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'instructors-list',
        component: InstructorsListComponent
      },
      {
        path: 'add-instructor',
        component: AddInstructorComponent
      },
      {
        path: 'edit-instructor/:id',
        component: EditInstructorComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminInstructorRoutingModule { }
