import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';



@NgModule({
  declarations: [EditInstructorComponent, AddInstructorComponent, InstructorsListComponent],
  imports: [
    CommonModule
  ]
})
export class AdminInstructorModule { }
