import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lectures-summary',
  templateUrl: './lectures-summary.component.html',
  styleUrls: ['./lectures-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesSummaryComponent implements OnInit {
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
