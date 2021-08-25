import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lectures-times',
  templateUrl: './lectures-times.component.html',
  styleUrls: ['./lectures-times.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesTimesComponent implements OnInit {
  lectureTimes;

  constructor(private calendar: NgbCalendar,
              private dataService:DataService) { }

  ngOnInit(): void {
    this.lectureTimes = this.dataService.getLectureTimes();
  }

  submittimesForm(timesForm){
     console.log("lectureTimes", this.lectureTimes);
  }
}
