import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IActionInfo } from '../action';

@Injectable({
  providedIn: 'root',
})
export class ActionsService {
  constructor(private http: HttpClient) {}

  private httpURL = 'http://localhost:8080/actions/';

  getActions(url: string): Observable<IActionInfo> {
    return this.http
      .get<IActionInfo>(this.httpURL + url)
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
