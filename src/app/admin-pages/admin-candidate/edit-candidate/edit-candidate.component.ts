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

  payments;
  newPayment = {
    id: 1,
    iznos: 0,
    datum: new Date()
  }
  paymentsInputVisible = false;
  paymentsSum = 0;
  wholePayment = 1020;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.candidate = this.dataService.getCandidate(id);
      this.payments = this.candidate.uplate;
      this.findPaymentsSum(this.payments);
      console.log("kandidat", this.candidate);
    } 
  }

  findPaymentsSum(payments){
    this.paymentsSum = 0;
    for (let i = 0; i < payments.length; i++) {
      this.paymentsSum += payments[i].iznos;
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

  showNewPaymentInput(){
    this.paymentsInputVisible = true;
  }

  addUplata(){
    if(+this.newPayment.iznos > 1020 - this.paymentsSum){
      this.toastr.error(`Pokušali ste unijeti previsok iznos. Ukupan preostali dug za ovog kandidata je ${1020 - this.paymentsSum}KM`);
      return;
    } else if(+this.newPayment.iznos < 0){
      this.toastr.error('Iznos uplate mora biti pozitivan broj');
      return;
    }
    if(this.payments.length > 0){
      this.newPayment.id = this.payments[this.payments.length - 1].id + 1;
    }
    this.newPayment.iznos = +this.newPayment.iznos;
    this.dataService.addPayment(this.candidate.id, this.newPayment)
    //set candidate after change
    this.candidate = this.dataService.getCandidate(this.candidate.id);
    this.payments = this.candidate.uplate;
    this.findPaymentsSum(this.payments)
    this.paymentsInputVisible = false;
    this.newPayment = {
      id: 1,
      iznos: 0,
      datum: new Date()
    }
    this.toastr.success(`Uplata uspješno dodana`);
  }

  cancelUplata(){
    this.paymentsInputVisible = false;
    this.newPayment.iznos = 0;
  }
}
