import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-side-panels',
  templateUrl: './side-panels.component.html',
  styleUrls: ['./side-panels.component.scss'],
})
export class SidePanelsComponent implements OnInit {
  notificationsForAdmin;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
  }

  deleteNotificationForAdmin(id){
    this.dataService.deleteNotificationForAdmin(id);
    this.notificationsForAdmin = this.dataService.getNotificationsForAdmin();
  }
}
