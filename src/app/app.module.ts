import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonServiceService } from './mon-service.service';
import { APIServiceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ListPersonComponent } from './list-person/list-person.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminModule } from './admin/admin.module'
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { ChuckDialogComponent } from './chuck-dialog/chuck-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    PersonDetailComponent,
    NotFoundComponent,
    LoadingDialogComponent,
    ChuckDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AdminModule,
    MatListModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MonServiceService, APIServiceService],
  bootstrap: [AppComponent],
  exports: [LoadingDialogComponent, ChuckDialogComponent],
  entryComponents: [LoadingDialogComponent, ChuckDialogComponent]
})
export class AppModule { }
 