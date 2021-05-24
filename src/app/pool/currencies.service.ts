import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  currencies: PoolModel.Currency[] = [
    {
      id: 1,
      name: 'Bitcoin',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      ticker: 'BTC',
      price: 32120.25,
      previous_price: 39520.21,
    },
    {
      id: 2,
      name: 'Ethereum',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      ticker: 'ETH',
      price: 2155.64,
      previous_price: 2100.9,
    },
  ];

  getCurrencies(): PoolModel.Currency[] {
    this.currencies = [
      ...this.currencies,
      ...this.currencies,
      ...this.currencies,
      ...this.currencies,
    ];
    return this.currencies;
  }

  constructor() {}
}
