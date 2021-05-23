import { NgModule } from '@angular/core';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { InstructorMainComponent } from './instructor-main/instructor-main.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { SharedModule } from '../shared/shared.module';
import { InstructorRoutingModule } from './instructor-routing.module';
import { CandidatesPageComponent } from './candidates-page/candidates-page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { LecturesTimesComponent } from './lectures-times/lectures-times.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CandidatePageComponent,
    InstructorMainComponent,
    NotificationsPageComponent,
    CandidatesPageComponent,
    VehiclePageComponent,
    LecturesTimesComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    NgbPaginationModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
