import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.scss']
})
export class VehiclePageComponent implements OnInit {
  instructor;
  vehicle;
  intervencije;
  documents;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.instructor = this.dataService.getInstructor(1);
    this.vehicle = this.dataService.getVehicle(this.instructor.vehicleId);
    this.intervencije = this.vehicle.intervencije;
    this.documents = this.vehicle.dokumenti;
  }

}
