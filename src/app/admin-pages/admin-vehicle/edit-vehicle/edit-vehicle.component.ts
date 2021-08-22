import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditVehicleComponent implements OnInit {
  currentYear;
  currentMonth;
  currentDay;

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;
  response:string;

  vehicle;
  showInstruktori = true;
  showIntervencije = false;
  showDokumenti = false;

  allInstructorsWithoutVehicle;
  selectedInstructorId;
  instruktori;
  newInstruktor = {
    id: 1,
    imePrezime: '',
    datumZaduzenja: new Date(),
    instructorId: 0
  }
  instructorsInputVisible = false;

  intervencije;
  newIntervencija = {
    id: 1,
    datum: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    },
    opis: '',
    trajanje: ''
  };
  intervencijeInputVisible = false;

  documents;
  documentInputVisible = false;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService,
    private router:Router) {
      this.uploader = new FileUploader({
        url: URL,
        disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
        formatDataFunctionIsAsync: true,
        formatDataFunction: async (item) => {
          return new Promise( (resolve, reject) => {
            resolve({
              name: item._file.name,
              length: item._file.size,
              contentType: item._file.type,
              date: new Date()
            });
          });
        }
      });

      this.hasBaseDropZoneOver = false;
      this.hasAnotherDropZoneOver = false;
   
      this.response = '';
   
      this.uploader.response.subscribe( res => this.response = res );
    }
  
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
                 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit(): void {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
    this.currentDay = date.getDate();
    this.allInstructorsWithoutVehicle = this.dataService.getInstructors().filter(x=>x.vehicleId === 0);
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.vehicle = this.dataService.getVehicle(id);
      this.instruktori = this.vehicle.instruktori;
      this.intervencije = this.vehicle.intervencije;
      this.documents = this.vehicle.dokumenti;
    } 
  }

  submitEditVehicleForm(editVehicleForm){
    if(!editVehicleForm.valid){
      this.toastr.error('Uređivanje vozila nije uspjelo. Promjene nisu sačuvane');
      return;
    }
    this.dataService.setVehicle(this.vehicle);
    this.toastr.success(`Uređivanje vozila uspješno završeno`);

    this.router.navigate(['/admin-vehicle/vehicles-list']);
  }

  showTable(table){
    switch(table){
      case 'instruktori':
        this.showInstruktori = true;
        this.showIntervencije = false;
        this.showDokumenti = false;
        break;
      case 'intervencije':
        this.showInstruktori = false;
        this.showIntervencije = true;
        this.showDokumenti = false;
        break;
      case 'dokumenti':
        this.showInstruktori = false;
        this.showIntervencije = false;
        this.showDokumenti = true;
        break;
    }
  }

  //Novi instruktor

  showNewInstructorInput(){
    this.instructorsInputVisible = true;
  }

  addInstructor(){
    if(this.instruktori.length > 0){
      this.newInstruktor.id = this.instruktori[this.instruktori.length - 1].id + 1;
    }
    for (let i = 0; i < this.allInstructorsWithoutVehicle.length; i++) {
      if(this.selectedInstructorId == this.allInstructorsWithoutVehicle[i].id){
        this.newInstruktor.imePrezime = `${this.allInstructorsWithoutVehicle[i].ime} ${this.allInstructorsWithoutVehicle[i].prezime}`;
        this.newInstruktor.instructorId = this.selectedInstructorId;
      }
    }
    this.dataService.addVehicleInstructor(this.vehicle.id, this.newInstruktor);
    //set vehicle after change
    this.allInstructorsWithoutVehicle = this.dataService.getInstructors().filter(x=>x.vehicleId === 0);
    this.vehicle = this.dataService.getVehicle(this.vehicle.id);
    this.newInstruktor = {
      id: 1,
      imePrezime: '',
      datumZaduzenja: new Date(),
      instructorId: 0
    }
    this.instructorsInputVisible = false;
    this.toastr.success(`Podaci o instruktoru uspješno dodani`);
  }

  cancelInstructor() {
    this.instructorsInputVisible = false;
  }

   //Nova intervencija

   showNewIntervencijaInput(){
    this.intervencijeInputVisible = true;
  }

  addIntervencija(){
    if(this.intervencije.length > 0){
      this.newIntervencija.id = this.intervencije[this.intervencije.length - 1].id + 1;
    }
    this.dataService.addIntervencija(this.vehicle.id, this.newIntervencija)
    //set vehicle after change
    this.vehicle = this.dataService.getVehicle(this.vehicle.id);
    this.intervencije = this.vehicle.intervencije;
    this.intervencijeInputVisible = false;
    this. newIntervencija = {
      id: 1,
      datum: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
      opis: '',
      trajanje: ''
    };
    this.toastr.success(`Podaci o intervenciji uspješno dodani`);
  }

  cancelIntervencija() {
    this.intervencijeInputVisible = false;
  }

  //Novi dokument

  showNewDocumentInput() {
    this.documentInputVisible = true;
  }

  cancelDokument() {
    this.documentInputVisible = false;
  }

  addDocument(){
    this.dataService.addDocumentVehicle(this.vehicle.id, "tehnicki_pregled_25082021.pdf")
    //set vehicle after change
    this.vehicle = this.dataService.getVehicle(this.vehicle.id);
    this.documents = this.vehicle.dokumenti;
    this.documentInputVisible = false;
    this.toastr.success(`Novi dokument uspješno dodan`);
  }
}
