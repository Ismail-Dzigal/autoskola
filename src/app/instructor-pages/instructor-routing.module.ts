import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { InstructorMainComponent } from './instructor-main/instructor-main.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'instructor-main',
        component: InstructorMainComponent
      },
      {
        path: 'notifications-page',
        component: NotificationsPageComponent
      },
      {
        path: 'candidate/:id',
        component: CandidatePageComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }