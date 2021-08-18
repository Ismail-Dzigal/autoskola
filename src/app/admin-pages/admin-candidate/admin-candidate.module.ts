import { NgModule } from '@angular/core';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminCandidateRoutingModule } from './admin-candidate-routing.module';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CandidatesListComponent, AddCandidateComponent, EditCandidateComponent],
  imports: [
    SharedModule,
    NgbModule,
    NgbPaginationModule,
    AdminCandidateRoutingModule
  ]
})
export class AdminCandidateModule { }
