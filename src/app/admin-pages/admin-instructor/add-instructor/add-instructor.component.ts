import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddInstructorComponent implements OnInit {
  instructor = {
    id: 1,
    ime: "",
    prezime: "",
    imeOca: "",
    jmbg: "",
    mjestoRodjenja: "",
    drzavljanstvo: "",
    brojLk: "",
    brojDozvole: "",
    zaduzenoVozilo: "",
    telefon: "",
    emailAdresa: "",
    lozinka: "",
    ponovljenaLozinka: "",
    slika: "",
    kandidati: [],
    seminari: [],
    dokumenti: [],
    vehicleId: 0,
    primljeneNotifikacije: [],
    poslaneNotifikacije: []
  };
  instructors;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.instructors = this.dataService.getInstructors();
  }

  submitAddInstructorForm(addInstructorForm: NgForm){
    if(!addInstructorForm.valid){
      this.toastr.error('Dodavanje instruktora nije uspjelo');
      return;
    }
    if(this.instructors.length > 0){
      this.instructor.id = this.instructors[this.instructors.length - 1].id + 1;
    }
    this.dataService.INSTRUCTORS.push(this.instructor);
    this.instructors = this.dataService.getInstructors();
    this.toastr.success(`Instruktor uspješno dodan`);
    
    setTimeout(()=>{ 
      this.toastr.info(`Pristupni podaci poslani na email adresu instruktora`);
    }, 2000);

    this.router.navigate(['/admin-instructor/instructors-list']);
  }

}
