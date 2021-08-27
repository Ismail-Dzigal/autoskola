import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lectures-times',
  templateUrl: './lectures-times.component.html',
  styleUrls: ['./lectures-times.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesTimesComponent implements OnInit {
  lectureTimes;
  vremena = [
    {
      hour: 8,
      minute: 15
    },
    {
      hour: 10,
      minute: 15
    },
    {
      hour: 12,
      minute: 15
    },
    {
      hour: 14,
      minute: 15
    },
    {
      hour: 16,
      minute: 15
    }
  ];

  allCandidates;
  selectedCandidate0 = "Izaberi kandidata";
  selectedCandidate1 = "Izaberi kandidata";
  selectedCandidate2 = "Izaberi kandidata";
  selectedCandidate3 = "Izaberi kandidata";
  selectedCandidate4 = "Izaberi kandidata";

  constructor(private calendar: NgbCalendar,
              private dataService:DataService,
              private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.lectureTimes = this.dataService.getLectureTimes();
    this.allCandidates = [...this.dataService.getInstructor(1).kandidati];
    for (let i = this.allCandidates.length - 1; i >= 0; i--) {
      for (let j = 0; j < this.lectureTimes.termini.length; j++) {
        if(this.allCandidates[i] === undefined){
           break;
        }
        if(this.allCandidates[i].imePrezime === this.lectureTimes.termini[j].kandidat){
          this.allCandidates.splice(i, 1);
        }
      }
    }
  }

  submitTimesForm(timesForm){
    for (let i = 0; i < this.lectureTimes.termini.length; i++) {
      this.lectureTimes.termini[i].time.hour = this.vremena[i].hour;
      this.lectureTimes.termini[i].time.minute = this.vremena[i].minute;
    }

    this.dataService.setLectureTimes(this.lectureTimes);
    this.lectureTimes = this.dataService.getLectureTimes();
    this.toastr.success('Uspješno sačuvani podaci');
  }

  setCandidateTime(id){
    if(id === 1){
      if(this.selectedCandidate0 === "Izaberi kandidata"){
        this.toastr.error('Morate odabrati kandidata iz liste');
        return;
      }
      this.lectureTimes.termini[id - 1].kandidat = this.selectedCandidate0;
    } else if (id === 2){
      if(this.selectedCandidate1 === "Izaberi kandidata"){
        this.toastr.error('Morate odabrati kandidata iz liste');
        return;
      }
      this.lectureTimes.termini[id - 1].kandidat = this.selectedCandidate1;
    } else if(id === 3){
      if(this.selectedCandidate2 === "Izaberi kandidata"){
        this.toastr.error('Morate odabrati kandidata iz liste');
        return;
      }
      this.lectureTimes.termini[id - 1].kandidat = this.selectedCandidate2;
    } else if(id === 4){
      if(this.selectedCandidate3 === "Izaberi kandidata"){
        this.toastr.error('Morate odabrati kandidata iz liste');
        return;
      }
      this.lectureTimes.termini[id - 1].kandidat = this.selectedCandidate3;
    } else if (id === 5){
      if(this.selectedCandidate4 === "Izaberi kandidata"){
        this.toastr.error('Morate odabrati kandidata iz liste');
        return;
      }
      this.lectureTimes.termini[id - 1].kandidat = this.selectedCandidate4;
    }
    this.dataService.setCandidateTime(this.lectureTimes.termini[id - 1]);
    for (let i = this.allCandidates.length - 1; i >= 0 ; i--) {
        if(this.allCandidates[i].imePrezime === this.lectureTimes.termini[id - 1].kandidat){
          this.allCandidates.splice(i, 1);
        }
    }
    this.lectureTimes = this.dataService.getLectureTimes();
    this.toastr.success('Uspješno sačuvani podaci');
  }
}
