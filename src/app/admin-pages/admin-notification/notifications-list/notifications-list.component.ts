import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
