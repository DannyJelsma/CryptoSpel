import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  // ! is there a way we can just store all the currencies in this service, some
  // ! sort of singleton?

  // - Store all currencies in this service.
  // - A better way of solving the nesting in currency.component.ts
  // - Fix the binance implementation

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<PoolModel.Currency[]> {
    // TODO: create request injector for module that defaults to the URL.
    return this.http
      .get<PoolModel.Currency[]>('http://localhost:3000/currencies')
      .pipe(
        tap(() => console.log('fetched currencies')),
        catchError(this.handleError<any>('getCurrencies'))
      );
  }

  // Source: https://angular.io/tutorial/toh-pt6#final-code-review
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
