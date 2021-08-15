import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidatesListComponent implements OnInit {
  paginationInfo: any;
  currentPage: number = 1;
  pageSize: number = 10;
  previousPage: number;
  totalCount: number = 3;
  totalPages: number = 1;
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

  constructor(private dataService: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.candidates = this.dataService.getCandidates();
    this.filteredCandidates = this.candidates;
  }

  deleteCandidate(id){
    this.dataService.deleteCandidate(id);
    this.candidates = this.dataService.getCandidates();
    this.filteredCandidates = this.candidates;
    this.toastr.success(`Kandidat uspješno obrisan`);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.candidates.filter((candidate) =>
      candidate.ime.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || candidate.prezime.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
