import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../mon-service.service';
import { LoginService } from '../login.service';
import { Person } from '../domain/person';
import { MatDialog } from '@angular/material/dialog';
import { ChuckDialogComponent } from '../chuck-dialog/chuck-dialog.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  title = 'Rick and Morty';
  listPeople: Person[];
  objectInformation;
  constructor(private monService: MonServiceService, private loginService: LoginService, private dialog: MatDialog) { } 

  ngOnInit() {
    let url = 'https://rickandmortyapi.com/api/character';
    
    if(this.monService.pageListNumber) {
      url += `/?page=${this.monService.pageListNumber}`;
    }

    this.getPeopleRickAndMorty(url);
  }

  logging() {
    this.loginService.loggedIn = true;
  }
  
  getPeopleRickAndMorty(url) {
    this.monService.getPeople(url).subscribe(
      (data: any) => {
        console.log(data);
        this.listPeople = data.results.map((resultElement) => 
          new Person(resultElement.id, resultElement.name, resultElement.status, resultElement.gender, resultElement.url)
        );
        console.log(this.listPeople);
        this.objectInformation= data.info;},
      (error) => console.log(error)
    );
  }

  suivantClick() {
    let url = this.objectInformation.next;
    this.monService.pageListNumber +=1;
    this.getPeopleRickAndMorty(url);
  }

  precedentClick() {
    let url = this.objectInformation.prev;
    this.monService.pageListNumber -=1;
    this.getPeopleRickAndMorty(url);
  }

  loadChuckDialog() {
      this.dialog.open(ChuckDialogComponent, {
        hasBackdrop: false,
        height: '300px',
        width: '600px'
      });
  }


}
