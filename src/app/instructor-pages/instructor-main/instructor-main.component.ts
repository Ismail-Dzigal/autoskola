import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-instructor-main',
  templateUrl: './instructor-main.component.html',
  styleUrls: ['./instructor-main.component.scss']
})
export class InstructorMainComponent implements OnInit {
  instructor;
  seminari;
  documents;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.instructor = this.dataService.getInstructor(1);
    this.seminari = this.instructor.seminari;
    this.documents = this.instructor.dokumenti;
  }

}
