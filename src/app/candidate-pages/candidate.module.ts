import { NgModule } from '@angular/core';
import { CandidateMainComponent } from './candidate-main/candidate-main.component';
import { LecturesTimesComponent } from './lectures-times/lectures-times.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { LecturesSummaryComponent } from './lectures-summary/lectures-summary.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateRoutingModule } from './candidate-routing.module';



@NgModule({
  declarations: [
    CandidateMainComponent, 
    LecturesTimesComponent, 
    NotificationsPageComponent, 
    LecturesSummaryComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    NgbPaginationModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
