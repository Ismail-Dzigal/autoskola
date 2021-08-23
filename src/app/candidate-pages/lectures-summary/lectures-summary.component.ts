import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lectures-summary',
  templateUrl: './lectures-summary.component.html',
  styleUrls: ['./lectures-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LecturesSummaryComponent implements OnInit {
  candidate;
  lectures;
  preostaloCasova;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.candidate = this.dataService.getCandidate(1);
    this.lectures = this.candidate.obuka;
    this.preostaloCasova = 35 - this.candidate.obuka[this.candidate.obuka.length - 1].zavrseniCasovi;
  }

}
