import { Injectable } from '@angular/core';
import { Brood } from './brood';
import { Observable, of } from 'rxjs';

//HTTP dependencies
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BroodService {

  /**LINK TO WEBAPI**/
  private broodjesUrl = 'api/broodjes';  // URL to web api

  constructor(private http: HttpClient) { }

  /**GET broodjes from mock data , in future from server**/
  getBroodjes(): Observable<Brood[]> {

    return this.http.get<Brood[]>(this.broodjesUrl)


  }
}
