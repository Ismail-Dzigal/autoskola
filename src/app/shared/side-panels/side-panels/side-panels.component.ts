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
  reminders;
  reminder = {
    id: 1,
    text: ''
  };
  reminderInputVisible = false;

  constructor(private dataService: DataService,
              private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
    this.reminders = this.dataService.getReminders();
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
