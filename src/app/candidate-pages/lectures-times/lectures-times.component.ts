import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lectures-times',
  templateUrl: './lectures-times.component.html',
  styleUrls: ['./lectures-times.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesTimesComponent implements OnInit {
  candidate;
  lectureTimes;
  izabranTermin = false;

  constructor(private dataService:DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.lectureTimes = this.dataService.getLectureTimes();
    this.candidate = this.dataService.getCandidate(1);
    for (let i = 0; i < this.lectureTimes.termini.length; i++) {
      if(this.lectureTimes.termini[i].kandidat === `${this.candidate.ime} ${this.candidate.prezime}`){
        console.log(this.lectureTimes.termini[i].kandidat);
         this.izabranTermin = true;
      }
    }
  }

  setCandidateTime(id){
    this.lectureTimes.termini[id - 1].kandidat = `${this.candidate.ime} ${this.candidate.prezime}`;
    this.dataService.setCandidateTime(this.lectureTimes.termini[id - 1]);
    this.izabranTermin = true;
    this.lectureTimes = this.dataService.getLectureTimes();
    this.toastr.success('Uspješno izabran termin');
  }

}
