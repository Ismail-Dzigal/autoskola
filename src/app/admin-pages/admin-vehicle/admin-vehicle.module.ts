import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';



@NgModule({
  declarations: [VehiclesListComponent, AddVehicleComponent, EditVehicleComponent],
  imports: [
    CommonModule
  ]
})
export class AdminVehicleModule { }
