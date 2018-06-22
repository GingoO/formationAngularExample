import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private loginService: LoginService, public dialogRef: MatDialogRef<DialogComponent>) { }

  lePtitNom = new FormControl("", Validators.required);
  formGroup2 = new FormGroup({lePtitNom: this.lePtitNom});

  ngOnInit() {
  }

  closeModalAndGetAdminName() {
    if(this.lePtitNom.value) {
      this.dialogRef.close(this.lePtitNom.value);
    }
  }

  unlogin() {
      this.loginService.loggedIn = false;
  }
}
