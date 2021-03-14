import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vehicles-list',
        component: VehiclesListComponent
      },
      {
        path: 'add-vehicle',
        component: AddVehicleComponent
      },
      {
        path: 'edit-vehicle/:id',
        component: EditVehicleComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminVehicleRoutingModule { }
