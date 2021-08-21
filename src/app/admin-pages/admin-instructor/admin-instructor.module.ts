import { NgModule } from '@angular/core';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminInstructorRoutingModule } from './admin-instructor-routing.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [EditInstructorComponent, AddInstructorComponent, InstructorsListComponent],
  imports: [
    SharedModule,
    NgbModule,
    NgbPaginationModule,
    AdminInstructorRoutingModule
  ]
})
export class AdminInstructorModule { }
