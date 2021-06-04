import { People } from './../../models/people.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastreService {

  private URL_API = 'http://localhost:9000/peoples';

  private listPeoples: Array<People>

  constructor(
    private httpClient: HttpClient
  ) {
    this.listPeoples = [];
  }

  get peoples(): Array<People> {
    return this.listPeoples;
  }

  findAll(): Observable<Array<People>> {
    return this.httpClient.get<Array<People>>(this.URL_API);
  }

  post(people: People): Observable<People> {
    return this.httpClient.post<People>(this.URL_API, people);
  }

}
