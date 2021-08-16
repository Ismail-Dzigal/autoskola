import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddCandidateComponent implements OnInit {
  candidate = {
        id: 1,
        ime: "",
        prezime: "",
        imeOca: "",
        jmbg: "",
        mjestoRodjenja: "",
        drzavljanstvo: "",
        brojLk: "",
        telefon: "",
        emailAdresa: "",
        lozinka: "",
        ponovljenaLozinka: "",
        slika: "",
        uplate: [],
        ispiti: [],
        dokumenti: [],
  };
  candidates;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.candidates = this.dataService.getCandidates();
  }

  submitAddCandidateForm(addCandidateForm: NgForm){
    if(!addCandidateForm.valid){
      this.toastr.error('Dodavanje kandidata nije uspjelo');
      return;
    }
    if(this.candidates.length > 0){
      this.candidate.id = this.candidates[this.candidates.length - 1].id + 1;
    }
    this.dataService.CANDIDATES.push(this.candidate);
    this.candidates = this.dataService.getCandidates();
    this.toastr.success(`Kandidat uspješno dodan`);
    
    setTimeout(()=>{ 
      this.toastr.info(`Pristupni podaci poslani na email adresu kandidata`);
    }, 2000);

    this.router.navigate(['/admin-candidate/candidates-list']);
  }
}
