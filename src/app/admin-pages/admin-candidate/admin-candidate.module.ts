import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';



@NgModule({
  declarations: [CandidatesListComponent, AddCandidateComponent, EditCandidateComponent],
  imports: [
    CommonModule
  ]
})
export class AdminCandidateModule { }
