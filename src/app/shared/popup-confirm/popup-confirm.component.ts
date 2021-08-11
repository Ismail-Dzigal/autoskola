import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './popup-confirm.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
  .popup-times .fas {
    color: red;
    font-size: 1.2rem;
    margin-right: 10px;
    cursor: pointer;
  }
`]
})
export class PopupConfirmComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
}
