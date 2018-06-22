import { Injectable } from '@angular/core';
import { APIServiceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  pageListNumber: number = 1;

  constructor(private apiService: APIServiceService) { }

  getPeople(url) {
    return this.apiService.get(url);
  }

  getPersonDetail(url) {
    return this.apiService.get(url);
  }

  getChuckJoke(url) {
    return this.apiService.get(url);
  }
}
