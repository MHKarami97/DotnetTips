import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ResultData } from '../models/post/array-of-post.module';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  apiUrl = '/DotnetTips/assets/dot-net-tips-database.json'; // in web
  // apiUrl = '/assets/dot-net-tips-database.json'; // in local
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.error.next(error.message);
      return throwError(error);
    };
  }

  get(): Observable<ResultData> {
    return this.http.get<ResultData>(this.apiUrl)
      .pipe(
        tap(),
        catchError(this.handleError('get', null),
        ));
  }
}
