import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/data.service';

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

  instructor;
  candidates;
  filteredCandidates;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCandidates = this.listFilter ? this.performFilter(this.listFilter) : this.candidates;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.instructor = this.dataService.getInstructor(1);
    this.candidates = this.instructor.kandidati;
    this.filteredCandidates = this.candidates;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.candidates.filter((candidate) =>
    candidate.imePrezime.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

}
