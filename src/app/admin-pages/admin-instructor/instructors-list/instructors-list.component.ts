import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

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
  instructors;
  filteredInstructors;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredInstructors = this.listFilter ? this.performFilter(this.listFilter) : this.instructors;
  }

  constructor(private dataService: DataService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.instructors = this.dataService.getInstructors();
    this.filteredInstructors = this.instructors;
  }

  deleteInstructor(id){
    this.dataService.deleteInstructor(id);
    this.instructors = this.dataService.getInstructors();
    this.filteredInstructors = this.instructors;
    this.toastr.success(`Instruktor uspješno obrisan`);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.instructors.filter((instructor) =>
      instructor.ime.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || instructor.prezime.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
