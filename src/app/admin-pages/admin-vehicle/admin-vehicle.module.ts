import { NgModule } from '@angular/core';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminVehicleRoutingModule } from './admin-vehicle-routing.module';



@NgModule({
  declarations: [VehiclesListComponent, AddVehicleComponent, EditVehicleComponent],
  imports: [
    SharedModule, 
    AdminVehicleRoutingModule
  ]
})
export class AdminVehicleModule { }
