import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {environment} from '@environment';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  currencies: PoolModel.Currency[] = [];

  constructor(private http: HttpClient) {}

  fetchCurrencies(): Observable<PoolModel.Currency[]> {
    return this.http
      .get<PoolModel.Currency[]>(environment.backendUrl + '/currencies')
      .pipe(
        catchError(this.handleError<any>('getCurrencies'))
      );
  }

  getCurrencies(): Promise<PoolModel.Currency[]> {
    return new Promise((resolve) => {
      if (this.currencies.length) {
        resolve(this.currencies);
      } else {
        this.fetchCurrencies().subscribe((currencies) => {
          this.currencies = currencies;
          resolve(this.currencies);
        });
      }
    });
  }

  async getCurrencyByTicker(ticker) {
    const currencies = await this.getCurrencies();
    return currencies.find((i) => i.ticker === ticker);
  }

  // Source: https://angular.io/tutorial/toh-pt6#final-code-review
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
}
