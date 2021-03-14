import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin-candidate',
    loadChildren: () => import('./admin-pages/admin-candidate/admin-candidate.module').then(m => m.AdminCandidateModule)
  },
  {
    path: 'admin-instructor',
    loadChildren: () => import('./admin-pages/admin-instructor/admin-instructor.module').then(m => m.AdminInstructorModule)
  },
  {
    path: 'admin-notification',
    loadChildren: () => import('./admin-pages/admin-notification/admin-notification.module').then(m => m.AdminNotificationModule)
  },
  {
    path: 'admin-vehicle',
    loadChildren: () => import('./admin-pages/admin-vehicle/admin-vehicle.module').then(m => m.AdminVehicleModule)
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
