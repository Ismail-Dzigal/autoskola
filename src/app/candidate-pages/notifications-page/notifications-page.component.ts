import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsPageComponent implements OnInit {
  candidate;
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.candidate = this.dataService.getCandidate(1);
    this.notifications = this.candidate.primljeneNotifikacije;
    this.filteredNotifications = this.notifications;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notifications.filter((notification) =>
    notification.naslov.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || notification.notificationTekst.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
