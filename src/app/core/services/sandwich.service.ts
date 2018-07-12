import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';

import { ApiService } from './api.service';
import { Sandwich } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BroodjeService {

  // URL where to fetch broodjes
  private url = 'sandwiches';  // URL to web api

  constructor(private api: ApiService) { }

  // Returns the mocked data if working on test. Contents are found in in-memory-db.service
  getBroodjes(...args): Observable<Sandwich[]> {
    return this.api.get(this.url);
  }
  // Returns the mocked data if working on test. Contents are found in in-memory-db.service
  getBroodje(id:number, ...args): Observable<Sandwich[]> {
    return this.api.get(`${this.url}/${id}`);
  }
}
