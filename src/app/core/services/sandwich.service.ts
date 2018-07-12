import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
  getBroodjes(params?: HttpParams, ...args): Observable<Sandwich[]> {
    // params = params || new HttpParams({
    //   fromObject: {
    //     name: '^c',
    //   }}
    // );
    return this.api.get(this.url, params);
  }
  // Returns the mocked data if working on test. Contents are found in in-memory-db.service
  getBroodje(id:number, ...args): Observable<Sandwich[]> {
    return this.api.get(`${this.url}/${id}`);
  }
}
