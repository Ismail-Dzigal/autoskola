import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateMainComponent } from './candidate-main/candidate-main.component';
import { LecturesSummaryComponent } from './lectures-summary/lectures-summary.component';
import { LecturesTimesComponent } from './lectures-times/lectures-times.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'candidate-main',
        component: CandidateMainComponent
      },
      {
        path: 'lectures-times',
        component: LecturesTimesComponent
      },
      {
        path: 'lectures-summary',
        component: LecturesSummaryComponent
      },
      {
        path: 'notifications',
        component: NotificationsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
