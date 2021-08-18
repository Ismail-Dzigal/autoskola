import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// File upload modules
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ReportsMainComponent } from './admin-pages/admin-reports/reports-main/reports-main.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReportsMainComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FileUploadModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
