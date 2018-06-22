import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-chuck-dialog',
  templateUrl: './chuck-dialog.component.html',
  styleUrls: ['./chuck-dialog.component.css']
})
export class ChuckDialogComponent implements OnInit {

  chuckJoke ="";

  constructor(private monService: MonServiceService, public dialogRef: MatDialogRef<ChuckDialogComponent>) { }

  ngOnInit() {
    this.monService.getChuckJoke("https://api.chucknorris.io/jokes/random").subscribe(
      (joke: any) => this.chuckJoke = joke.value, (error) => this.chuckJoke = `Pas de vanne dispos : ${error}`
    );
  }

  closeChuck() {
    this.dialogRef.close();
  }
}
