import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/internal/operators';

import { environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
/**
 * API service
 * Wrap around the Angular HTTP client and use the environment parameters provided in the environment files
 * Avoids re-declaring the API endpoint multiple times
 * Same usage as the Angular HTTP Client
 */
export class ApiService {
  /**
   * Initialize a new API service
   * @param {HttpClient} http
   */
  constructor(
    private http: HttpClient,
  ) {}

  private formatErrors(error: any) {
    return throwError(new Error(error.error));
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
      return this.http.get<T>(`${environment.api_url}${path}`, { params })
        .pipe(catchError(this.formatErrors));
  }
  put<T>(path: string, body: Object = {}): Observable<any> {
    return this.http.put<T>(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: Object = {}): Observable<any> {
    return this.http.post<T>(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete<T>(path): Observable<any> {
    return this.http.delete<T>(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
