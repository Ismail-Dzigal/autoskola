import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InstructorsListComponent implements OnInit {
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
