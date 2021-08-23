import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-candidate-main',
  templateUrl: './candidate-main.component.html',
  styleUrls: ['./candidate-main.component.scss']
})
export class CandidateMainComponent implements OnInit {
  candidate;
  showUplate = true;
  showIspiti = false;
  showDokumenti = false;

  payments;
  paymentsSum;
  exams;
  documents;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.candidate = this.dataService.getCandidate(1);
    this.payments = this.candidate.uplate;
    this.exams = this.candidate.ispiti;
    this.documents = this.candidate.dokumenti;
    this.findPaymentsSum(this.payments);
  }

  findPaymentsSum(payments){
    this.paymentsSum = 0;
    for (let i = 0; i < payments.length; i++) {
      this.paymentsSum += payments[i].iznos;
    }
  }

  showTable(table){
    switch(table){
      case 'uplate':
        this.showUplate = true;
        this.showIspiti = false;
        this.showDokumenti = false;
        break;
      case 'ispiti':
        this.showUplate = false;
        this.showIspiti = true;
        this.showDokumenti = false;
        break;
      case 'dokumenti':
        this.showUplate = false;
        this.showIspiti = false;
        this.showDokumenti = true;
        break;
    }
  }

}
