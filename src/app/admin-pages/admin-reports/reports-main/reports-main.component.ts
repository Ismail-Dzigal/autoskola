import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-reports-main',
  templateUrl: './reports-main.component.html',
  styleUrls: ['./reports-main.component.scss']
})
export class ReportsMainComponent implements OnInit {
  showKandidati = true;
  showInstruktori = false;
  showVozila = false;
  candidates;
  instructors;
  vehicles;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.candidates = this.dataService.getCandidates();
    this.instructors = this.dataService.getInstructors();
    this.vehicles = this.dataService.getVehicles();
  }

  showTable(table){
    switch(table){
      case 'kandidati':
        this.showKandidati = true;
        this.showInstruktori = false;
        this.showVozila = false;
        break;
      case 'instruktori':
        this.showKandidati = false;
        this.showInstruktori = true;
        this.showVozila = false;
        break;
      case 'vozila':
        this.showKandidati = false;
        this.showInstruktori = false;
        this.showVozila = true;
        break;
    }
  }
}
