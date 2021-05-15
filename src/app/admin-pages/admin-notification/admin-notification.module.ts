import { NgModule } from '@angular/core';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { SeeNotificationComponent } from './see-notification/see-notification.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminNotificationRoutingModule } from './admin-notification-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NotificationsListComponent, AddNotificationComponent, SeeNotificationComponent],
  imports: [
    SharedModule,
    NgbPaginationModule,
    AdminNotificationRoutingModule
  ]
})
export class AdminNotificationModule { }
