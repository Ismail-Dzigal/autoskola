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

  candidates;
  newCandidate = '';
  candidatesInputVisible = false;

  seminari;
  newSeminar = {};
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
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.instructor = this.dataService.getInstructor(id);
      // this.payments = this.candidate.uplate;
      // this.exams = this.candidate.ispiti;
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
    this.seminarInputVisible = false;
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
    this.dataService.addDocument(this.instructor.id, "potvrda_usavrsavanje_25082021.pdf")
    //set candidate after change
    this.instructor = this.dataService.getCandidate(this.instructor.id);
    this.documents = this.instructor.dokumenti;
    this.documentInputVisible = false;
    this.toastr.success(`Novi dokument uspješno dodan`);
  }
}
