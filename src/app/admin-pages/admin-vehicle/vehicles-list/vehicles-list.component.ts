import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

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
  vehicles;
  filteredVehicles;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredVehicles = this.listFilter ? this.performFilter(this.listFilter) : this.filteredVehicles;
  }

  constructor(private dataService: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vehicles = this.dataService.getVehicles();
    this.filteredVehicles = this.vehicles;
  }

  deleteVehicle(id){
    this.dataService.deleteVehicle(id);
    this.vehicles = this.dataService.getVehicles();
    this.filteredVehicles = this.vehicles;
    this.toastr.success(`Vozilo uspješno obrisano`);
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.vehicles.filter((vehicle) =>
      vehicle.marka.toLocaleLowerCase().indexOf(filterBy) !== -1 
      || vehicle.registarskaOznaka.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
