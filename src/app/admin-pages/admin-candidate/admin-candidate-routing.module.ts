import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'candidates-list',
        component: CandidatesListComponent
      },
      {
        path: 'add-candidate',
        component: AddCandidateComponent
      },
      {
        path: 'edit-candidate/:id',
        component: EditCandidateComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCandidateRoutingModule { }
