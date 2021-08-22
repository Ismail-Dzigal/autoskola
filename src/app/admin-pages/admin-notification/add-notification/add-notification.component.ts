import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddNotificationComponent implements OnInit {
  recipientType;
  recipientsList;
  selectedRecipientId;
  notificationsFromAdmin;

  newNotification = {
    id: 1,
    naslov: '',
    notificationTekst: '',
    vrijemeSlanja: `${new Date().getHours() + 1 } : ${new Date().getMinutes() + 1}`,
    datumSlanja: new Date(),
    recipientImePrezime: ''
  }

  _recipient = '';
  get recipient(): string {
    return this._recipient;
  }
  set recipient(value: string) {
    this._recipient = value;
    this.recipientType = this._recipient;
    this.getList();
  }

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.notificationsFromAdmin = this.dataService.getNotificationsFromAdmin();
  }

  getList(){
    if(this.recipientType === 'instructor'){
      this.recipientsList = this.dataService.getInstructors();
    } else if(this.recipientType === 'candidate') {
      this.recipientsList = this.dataService.getCandidates();
    }
  }

  submitAddNotificationForm(addNotificationForm){
    if(this.selectedRecipientId === undefined){
      this.toastr.error('Morate odabrati primaoca');
      return;
    }
    if(!addNotificationForm.valid){
      this.toastr.error('Slanje notifikacije nije uspjelo');
      return;
    }
    if(this.notificationsFromAdmin.length > 0){
      this.newNotification.id = this.notificationsFromAdmin[this.notificationsFromAdmin.length - 1].id + 1;
    }

    for (let i = 0; i < this.recipientsList.length; i++) {
      if(this.selectedRecipientId == this.recipientsList[i].id){
        this.newNotification.recipientImePrezime = `${this.recipientsList[i].ime} ${this.recipientsList[i].prezime}`;
        this.newNotification.vrijemeSlanja = `${new Date().getHours()} : ${new Date().getMinutes()}`;
      }
    }
    this.dataService.addNotificationFromAdmin(this.newNotification);
    
    if(this.recipientType === 'instructor') {
      this.dataService.addNotificationFromAdminInstructor(this.selectedRecipientId, this.newNotification);
    } else if(this.recipientType === 'candidate'){
      this.dataService.addNotificationFromAdminCandidate(this.selectedRecipientId, this.newNotification);
    }
    this.notificationsFromAdmin = this.dataService.getNotificationsFromAdmin();
      this.newNotification = {
        id: 1,
        naslov: '',
        notificationTekst: '',
        vrijemeSlanja: `${new Date().getHours() } : ${new Date().getMinutes()}`,
        datumSlanja: new Date(),
        recipientImePrezime: ''
      }
      this.toastr.success(`Notifikacija uspješno poslana`);

      this.router.navigate(['/admin-notification/notifications-list']);
  }
}
