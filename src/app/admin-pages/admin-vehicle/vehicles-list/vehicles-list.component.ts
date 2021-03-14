import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclesListComponent implements OnInit {
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
