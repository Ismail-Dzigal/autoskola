import { NgModule } from '@angular/core';
import { CandidatePageComponent } from './candidate-page/candidate-page.component';
import { InstructorMainComponent } from './instructor-main/instructor-main.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { SharedModule } from '../shared/shared.module';
import { InstructorRoutingModule } from './instructor-routing.module';

@NgModule({
  declarations: [
    CandidatePageComponent,
    InstructorMainComponent,
    NotificationsPageComponent
  ],
  imports: [
    SharedModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
