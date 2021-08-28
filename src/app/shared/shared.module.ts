import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidePanelsComponent } from './side-panels/side-panels/side-panels.component';
import { PopupConfirmComponent } from './popup-confirm/popup-confirm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupConfirmButtonComponent } from './popup-confirm-button/popup-confirm-button.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidePanelsComponent,
    PopupConfirmComponent,
    PopupConfirmButtonComponent
  ],
  declarations: [
    SidePanelsComponent, 
    PopupConfirmComponent, 
    PopupConfirmButtonComponent],
})
export class SharedModule { }
