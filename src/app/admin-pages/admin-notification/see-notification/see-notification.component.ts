import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-see-notification',
  templateUrl: './see-notification.component.html',
  styleUrls: ['./see-notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeeNotificationComponent implements OnInit {
  notification;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.notification = this.dataService.getNotificationFromAdmin(id);
    } 
  }

}
