import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { StatusComponent } from './admin/status/status.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './admin/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, StatusComponent, DialogComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class AdminModule { }
