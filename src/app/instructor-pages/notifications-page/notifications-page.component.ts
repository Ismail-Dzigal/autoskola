import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsPageComponent implements OnInit {
  instructor;
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

  newNotification = {
    id: 1,
    title: '',
    body: '',
    sender: '',
    createdAt: new Date(),
    state: 'novo'
  }

  notificationsForAdmin;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.instructor = this.dataService.getInstructor(1);
    this.notifications = this.instructor.primljeneNotifikacije;
    this.filteredNotifications = this.notifications;
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notifications.filter((notification) =>
    notification.naslov.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || notification.notificationTekst.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  submitSendNotificationForm(sendNotificationForm){
    if(!sendNotificationForm.valid){
      this.toastr.error('Slanje notifikacije nije uspjelo. Provjerite da li ste unijeli naslov i sadržaj.');
      return;
    }
    if(this.notificationsForAdmin.length > 0){
      this.newNotification.id = this.notificationsForAdmin[this.notificationsForAdmin.length - 1].id + 1;
    }

    this.newNotification.sender = `${this.instructor.ime} ${this.instructor.prezime}`;
    this.dataService.addNotificationForAdmin(this.newNotification);
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
 
    this.newNotification = {
      id: 1,
      title: '',
      body: '',
      sender: '',
      createdAt: new Date(),
      state: 'novo'
    }
    this.toastr.success(`Notifikacija uspješno poslana`);
    this.router.navigate(['/instructor-pages/instructor-main']);
  }

}
