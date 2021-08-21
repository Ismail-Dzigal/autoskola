import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditInstructorComponent implements OnInit {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;
  response:string;

  instructor;
  showKandidati = true;
  showSeminari = false; 
  showDokumenti = false;

  allUnsetCandidates;
  selectedCandidateId;
  candidates;
  newCandidate = {
    id: 1,
    imePrezime: '',
    datum: new Date(),
    candidateId: 0
  };
  candidatesInputVisible = false;

  seminari;
  newSeminar = {
    id: 1,
    datum: {
      year: 2021,
      month: 8,
      day: 1
    },
    tema: '',
    predavac: ''
  };
  seminarInputVisible = false;

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
    this.allUnsetCandidates = this.dataService.getCandidates().filter(x=>x.instructorId === 0);
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.instructor = this.dataService.getInstructor(id);
      this.candidates = this.instructor.kandidati;
      this.seminari = this.instructor.seminari;
      this.documents = this.instructor.dokumenti;
    } 
  }

  submitEditInstructorForm(editInstructorForm){
    if(!editInstructorForm.valid){
      this.toastr.error('Uređivanje instruktora nije uspjelo. Promjene nisu sačuvane');
      return;
    }
    this.dataService.setInstructor(this.instructor);
    this.toastr.success(`Uređivanje instructora uspješno završeno`);

    this.router.navigate(['/admin-instructor/instructors-list']);
  }

  showTable(table){
    switch(table){
      case 'kandidati':
        this.showKandidati = true;
        this.showSeminari = false;
        this.showDokumenti = false;
        break;
      case 'seminari':
        this.showKandidati = false;
        this.showSeminari = true;
        this.showDokumenti = false;
        break;
      case 'dokumenti':
        this.showKandidati = false;
        this.showSeminari = false;
        this.showDokumenti = true;
        break;
    }
  }

  //Novi kandidat

  showNewCandidateInput(){
    this.candidatesInputVisible = true;
  }

  addCandidate(){
    if(this.candidates.length > 0){
      this.newCandidate.id = this.candidates[this.candidates.length - 1].id + 1;
    }
    for (let i = 0; i < this.allUnsetCandidates.length; i++) {
      if(this.selectedCandidateId == this.allUnsetCandidates[i].id){
        this.newCandidate.imePrezime = `${this.allUnsetCandidates[i].ime} ${this.allUnsetCandidates[i].prezime}`;
        this.newCandidate.candidateId = this.selectedCandidateId;
      }
    }
    this.dataService.addInstructorCandidate(this.instructor.id, this.newCandidate);
    //set instructor after change
    this.allUnsetCandidates = this.dataService.getCandidates().filter(x => x.instructorId === 0);
    this.instructor = this.dataService.getInstructor(this.instructor.id);
    this.newCandidate = {
        id: 1,
        imePrezime: '',
        datum: new Date(),
        candidateId: 0
    };
    this.candidatesInputVisible = false;
    this.toastr.success(`Kandidat uspješno dodan`);
  }

  cancelKandidat() {
    this.candidatesInputVisible = false;
  }

  //Novi seminar

  showNewSeminarInput(){
    this.seminarInputVisible = true;
  }

  addSeminar(){
    if(this.seminari.length > 0){
      this.newSeminar.id = this.seminari[this.seminari.length - 1].id + 1;
    }
    this.dataService.addSeminar(this.instructor.id, this.newSeminar)
    //set candidate after change
    this.instructor = this.dataService.getInstructor(this.instructor.id);
    this.seminari = this.instructor.seminari;
    this.seminarInputVisible = false;
    this. newSeminar = {
      id: 1,
      datum: {
        year: 2021,
        month: 8,
        day: 1
      },
      tema: '',
      predavac: ''
    };
    this.toastr.success(`Podaci o seminaru uspješno dodani`);
  }

  cancelSeminar() {
    this.seminarInputVisible = false;
  }

  //Novi dokument

  showNewDocumentInput() {
    this.documentInputVisible = true;
  }

  cancelDokument() {
    this.documentInputVisible = false;
  }

  addDocument(){
    this.dataService.addDocumentInstructor(this.instructor.id, "potvrda_usavrsavanje_25082021.pdf")
    //set instructor after change
    this.instructor = this.dataService.getInstructor(this.instructor.id);
    this.documents = this.instructor.dokumenti;
    this.documentInputVisible = false;
    this.toastr.success(`Novi dokument uspješno dodan`);
  }
}
