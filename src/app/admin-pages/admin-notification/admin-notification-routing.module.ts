import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { EditNotificationComponent } from './edit-notification/edit-notification.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

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
        path: 'edit-notification/:id',
        component: EditNotificationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNotificationRoutingModule { }
