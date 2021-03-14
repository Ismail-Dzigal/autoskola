import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidePanelsComponent } from './side-panels/side-panels/side-panels.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SidePanelsComponent
  ],
  declarations: [SidePanelsComponent],
})
export class SharedModule { }
