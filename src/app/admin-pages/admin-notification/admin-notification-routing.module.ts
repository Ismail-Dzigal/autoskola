import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { SeeNotificationComponent } from './see-notification/see-notification.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'notifications-list',
        component: NotificationsListComponent
      },
      {
        path: 'add-notification',
        component: AddNotificationComponent
      },
      {
        path: 'see-notification/:id',
        component: SeeNotificationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNotificationRoutingModule { }
