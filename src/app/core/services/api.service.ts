import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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

  // Currently using any type of error since the in-memory-web is returning something special :)
  private handleError(error: any) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else if (error.body) {
    // in memory db
    console.error(`Backend returned code ${error.status}, ` +  `body was: ${error.body.error}`);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(`Backend returned code ${error.status}, ` +  `body was: ${error.message}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
};

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
      return this.http.get<T>(
        `${environment.api_url}${path}`,
        { params }
      ).pipe(catchError(this.handleError));
  }
  put<T>(path: string, body: Object = {}): Observable<any> {
    return this.http.put<T>(
      `${environment.api_url}${path}`,
      body
    ).pipe(catchError(this.handleError));
  }

  post<T>(path: string, body: Object = {}): Observable<any> {
    return this.http.post<T>(
      `${environment.api_url}${path}`,
      body
    ).pipe(catchError(this.handleError));
  }

  delete<T>(path): Observable<any> {
    return this.http.delete<T>(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.handleError));
  }
}
