import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidatesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
