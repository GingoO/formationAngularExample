import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  numberOfOnGoingRequest:number = 0;
  dialogRef = null;
  
  get(url) {
    this.numberOfOnGoingRequest++;
    this.showLoadingDialog();
    let observableResult = this.http.get(url);
    observableResult.subscribe(() => {
      setTimeout(() => this.decrementRequest(), 1000)
    }, () => {
      this.decrementRequest();
    });
    return observableResult;
  }

  decrementRequest() {
    this.numberOfOnGoingRequest--;
    if(this.numberOfOnGoingRequest === 0) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }

  showLoadingDialog() {
    if(!this.dialogRef) {
      this.dialogRef = this.dialog.open(LoadingDialogComponent, {
        hasBackdrop: false,
        height: '150px',
        width: '150px'
      });
    }
  }

}
