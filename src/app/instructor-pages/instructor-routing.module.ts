import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { CandidatesPageComponent } from './candidates-page/candidates-page.component';
import { InstructorMainComponent } from './instructor-main/instructor-main.component';
import { LecturesTimesComponent } from './lectures-times/lectures-times.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'instructor-main',
        component: InstructorMainComponent
      },
      {
        path: 'vehicle',
        component: VehiclePageComponent
      },
      {
        path: 'lectures',
        component: LecturesTimesComponent
      },
      {
        path: 'notifications',
        component: NotificationsPageComponent
      },
      {
        path: 'candidates',
        component: CandidatesPageComponent
      },
      {
        path: 'candidate/:id',
        component: CandidatePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }