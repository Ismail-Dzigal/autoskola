import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsListComponent implements OnInit {
  paginationInfo: any;
  currentPage: number = 1;
  pageSize: number = 10;
  previousPage: number;
  totalCount: number = 3;
  totalPages: number = 1;
  notifications;
  filteredNotifications;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredNotifications = this.listFilter ? this.performFilter(this.listFilter) : this.notifications;
  }

  constructor(private dataService: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.notifications = this.dataService.getNotificationsFromAdmin();
    this.filteredNotifications = this.notifications;
  }

  deleteNotification(id){
    this.dataService.deleteNotificationFromAdmin(id);
    this.notifications = this.dataService.getNotificationsFromAdmin();
    this.filteredNotifications = this.notifications;
    this.toastr.success(`Notifikacija uspješno obrisana`);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notifications.filter((notification) =>
    notification.recipientImePrezime.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || notification.notificationTekst.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
