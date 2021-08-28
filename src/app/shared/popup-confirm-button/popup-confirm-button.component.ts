import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-confirm-button',
  templateUrl: './popup-confirm-button.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
  .popup-button {
    width: 65px !important;
    border-radius: 6px !important;
    color: white !important;
    background-color: #C75050 !important;
  }
 `]
})
export class PopupConfirmButtonComponent implements OnInit {
  closeResult: string;
  @Output() deleteItemEvent = new EventEmitter<string>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  deleteItem(modal) {
    this.deleteItemEvent.emit('');
    modal.close('Close click');
  }

}
