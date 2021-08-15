import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditCandidateComponent implements OnInit {
  candidate;
  showUplate = true;
  showIspiti = false;
  showDokumenti = false;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.candidate = this.dataService.getCandidate(id);
    } 
  }

  submitEditCandidateForm(editCandidateForm){
    if(!editCandidateForm.valid){
      this.toastr.error('Uređivanje kandidata nije uspjelo. Promjene nisu sačuvane');
      return;
    }
    this.dataService.setCandidate(this.candidate);
    this.toastr.success(`Uređivanje kandidata uspješno završeno`);

    this.router.navigate(['/admin-candidate/candidates-list']);
  }

  showTable(table){
    switch(table){
      case 'uplate':
        this.showUplate = true;
        this.showIspiti = false;
        this.showDokumenti = false;
        break;
      case 'ispiti':
        this.showUplate = false;
        this.showIspiti = true;
        this.showDokumenti = false;
        break;
      case 'dokumenti':
        this.showUplate = false;
        this.showIspiti = false;
        this.showDokumenti = true;
        break;
    }

  }
}
