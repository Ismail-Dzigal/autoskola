import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-side-panels',
  templateUrl: './side-panels.component.html',
  styleUrls: ['./side-panels.component.scss'],
})
export class SidePanelsComponent implements OnInit {
  notificationsForAdmin;
  notification;
  reminders;
  reminder = {
    id: 1,
    text: ''
  };
  reminderInputVisible = false;
  states;
  checkVisible = false;
  setNumber = -1;
  selectedStateId = 0;

  constructor(private dataService: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
    this.reminders = this.dataService.getReminders();
    this.states = [
      {
        id: 1,
        naziv: "novo"
      },
      {
        id: 2,
        naziv: "u toku"
      },
      {
        id: 3,
        naziv: "završeno"
      }
    ]
  }

  openEditNotification = function(index){
      this.checkVisible = true;
      this.setNumber = index;
  }

  cancelEditNotification(){
    this.checkVisible = false;
    this.setNumber = -1;
    this.selectedStateId = 0;
  }

  changeState(id){
    this.notification = this.dataService.getNotificationForAdmin(id);
    if(this.selectedStateId !== 0){
      switch(this.selectedStateId.toString()){
        case '1':
          this.notification.state = 'novo';
          this.toastr.success(`Uređivanje notifikacije uspješno završeno`);
          break;
        case '2':
          this.notification.state = 'u toku';
          this.toastr.success(`Uređivanje notifikacije uspješno završeno`);
          break;
        case '3':
          this.notification.state = 'završeno';
          this.toastr.success(`Uređivanje notifikacije uspješno završeno`);
          break;
      }
      this.dataService.setNotificationForAdmin(this.notification);
      this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
      this.checkVisible = false;
      this.setNumber = -1;
      return;
    }
      
    this.toastr.error(`Uređivanje notifikacije nije uspjelo. Morate odabrati stanje notifikacije iz padajućeg menija`); 
    this.checkVisible = false;
    this.setNumber = -1;
  }

  deleteNotificationForAdmin(id){
    this.dataService.deleteNotificationForAdmin(id);
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
    this.toastr.success(`Notifikacija uspješno obrisana`);
  }

  showReminderInput(){
    this.reminderInputVisible = true;
  }

  deleteReminder(id){
    this.dataService.deleteReminder(id);
    this.reminders = this.dataService.getReminders();
    this.toastr.success(`Podsjetnik uspješno obrisan`);
  }

  addReminder(){
    if(this.reminder.text.length < 5){
      this.toastr.error('Dodavanje podsjetnika nije uspjelo');
      return;
    }
    if(this.reminders.length > 0){
      this.reminder.id = this.reminders[this.reminders.length - 1].id + 1;
    }
    this.dataService.REMINDERS.push(this.reminder);
    this.reminders = this.dataService.getReminders();
    this.reminderInputVisible = false;
    this.toastr.success(`Podsjetnik uspješno dodan`);
  }

  cancelReminderAdding(){
    this.reminderInputVisible = false;
    this.reminder.text = '';
  }
}
