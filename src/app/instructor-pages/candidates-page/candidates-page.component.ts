import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-candidates-page',
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidatesPageComponent implements OnInit {
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
