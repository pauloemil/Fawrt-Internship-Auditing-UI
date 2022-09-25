import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ISelectors } from '../selectors';
@Injectable({
  providedIn: 'root',
})
export class SelectorsService {
  constructor(private http: HttpClient) {}

  private httpURL = 'http://localhost:8080/selectors/';

  getSelectors(): Observable<ISelectors> {
    return this.http
      .get<ISelectors>(this.httpURL)
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
