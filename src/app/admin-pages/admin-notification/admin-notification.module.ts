import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { EditNotificationComponent } from './edit-notification/edit-notification.component';



@NgModule({
  declarations: [NotificationsListComponent, AddNotificationComponent, EditNotificationComponent],
  imports: [
    CommonModule
  ]
})
export class AdminNotificationModule { }
