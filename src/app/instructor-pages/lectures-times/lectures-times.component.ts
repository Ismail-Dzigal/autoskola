import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lectures-times',
  templateUrl: './lectures-times.component.html',
  styleUrls: ['./lectures-times.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesTimesComponent implements OnInit {
  time = {
    hour: 13,
    minute: 30
  };

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }
}
