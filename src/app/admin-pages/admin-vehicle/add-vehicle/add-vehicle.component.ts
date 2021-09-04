import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddVehicleComponent implements OnInit {
  currentYear;
  currentMonth;
  currentDay;
  
  vehicle = {
    id: 1,
    vrstaVozila: '',
    marka: '',
    tip: '',
    brojSasije: '',
    brojMotora: '',
    gorivo: '',
    registarskaOznaka: '',
    godinaProizvodnje: '',
    datumRegistracije: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() + 1,
    },
    saobracajnaDozvola: '',
    vlasnicka: '',
    slika:'',
    instruktori: [],
    intervencije: [],
    dokumenti: []
  }
  vehicles;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    let date = new Date();
    this.vehicles = this.dataService.getVehicles();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
    this.currentDay = date.getDate();
    this.vehicle.datumRegistracije = {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay
    }
  }

  submitAddVehicleForm(addVehicleForm: NgForm){
    if(!addVehicleForm.valid){
      this.toastr.error('Dodavanje vozila nije uspjelo. Provjerite da li su uneseni svi potrebni podaci');
      return;
    }
    if(this.vehicles.length > 0){
      this.vehicle.id = this.vehicles[this.vehicles.length - 1].id + 1;
    }
    this.dataService.VEHICLES.push(this.vehicle);
    this.vehicles = this.dataService.getVehicles();
    this.toastr.success(`Vozilo uspješno dodano`);

    this.router.navigate(['/admin-vehicle/vehicles-list']);
  }
}
