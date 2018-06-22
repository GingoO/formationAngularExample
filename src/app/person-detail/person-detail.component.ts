import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonDetail } from '../domain/personDetail'
import { MonServiceService } from '../mon-service.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  baseUrl = "https://rickandmortyapi.com/api/character/";
  personDetail: PersonDetail;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private monService: MonServiceService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    let url = this.baseUrl + id;
    this.getPersonDetail(url);
  }

  getPersonDetail(url) {
    this.monService.getPersonDetail(url).subscribe((dataPerson: any) => {
      this.personDetail = new PersonDetail(dataPerson.id, dataPerson.name, dataPerson.status, dataPerson.gender, dataPerson.species, dataPerson.type, dataPerson.image);
    })
  }

  goToListViaRoute() {
    this.router.navigateByUrl("");
  }

}
