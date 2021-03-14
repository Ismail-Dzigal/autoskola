import { NgModule } from '@angular/core';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminCandidateRoutingModule } from './admin-candidate-routing.module';



@NgModule({
  declarations: [CandidatesListComponent, AddCandidateComponent, EditCandidateComponent],
  imports: [
    SharedModule,
    AdminCandidateRoutingModule
  ]
})
export class AdminCandidateModule { }
