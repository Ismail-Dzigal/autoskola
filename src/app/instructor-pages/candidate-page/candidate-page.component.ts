import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidatePageComponent implements OnInit {
  candidate;
  lectures;
  preostaloCasova;
  newDataInputVisible = false;
  newData = {
    id: 1,
    datum: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    },
    zevrseniCasovi: 0,
    tema: '',
    ruta: '',
    komentar: '',
    ocjena: 0
  }

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setInitialData();
  }

  setInitialData(){
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.candidate = this.dataService.getCandidate(id);
      this.lectures = this.candidate.obuka;
      this.preostaloCasova = 35 - this.candidate.obuka[this.candidate.obuka.length - 1].zavrseniCasovi;
    }
  }

  shownewDataInput(){
    this.newDataInputVisible = true;
  }

  submitAddDataForm(addDataForm){
    if(!addDataForm.valid){
      this.toastr.error('Dodavanje podataka nije uspjelo. Promjene nisu sačuvane');
      return;
    }

    if (this.lectures.length > 0) {
      this.newData.id = this.lectures[this.lectures.length - 1].id + 1;
    }

    this.dataService.addNewDataLectures(this.candidate.id, this.newData);
    //set candidate after change
    this.setInitialData();
    this.newData = {
      id: 1,
      datum: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      },
      zevrseniCasovi: 0,
      tema: '',
      ruta: '',
      komentar: '',
      ocjena: 0
    }
    this.newDataInputVisible = false;
    this.toastr.success(`Podaci uspješno dodani`);
  }

  cancelAddData(){
    this.newDataInputVisible = false;
    this.newData = {
      id: 1,
      datum: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      },
      zevrseniCasovi: 0,
      tema: '',
      ruta: '',
      komentar: '',
      ocjena: 0
    }
  }
}
