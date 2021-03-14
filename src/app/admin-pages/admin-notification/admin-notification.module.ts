import { NgModule } from '@angular/core';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { EditNotificationComponent } from './edit-notification/edit-notification.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminNotificationRoutingModule } from './admin-notification-routing.module';



@NgModule({
  declarations: [NotificationsListComponent, AddNotificationComponent, EditNotificationComponent],
  imports: [
    SharedModule,
    AdminNotificationRoutingModule
  ]
})
export class AdminNotificationModule { }
