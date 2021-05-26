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
      graph:
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png',
      ticker: 'BTC',
      price: 32120.25,
      previous_price: 39520.21,
    },
    {
      id: 2,
      name: 'Ethereum',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      graph:
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1027.png',
      ticker: 'ETH',
      price: 2155.64,
      previous_price: 2100.9,
    },
    {
      id: 3,
      name: 'Cardano',
      icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
      graph:
        'https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/2010.png',
      ticker: 'ADA',
      price: 1.34,
      previous_price: 1.92,
    },
  ];

  getCurrencies(): PoolModel.Currency[] {
    return this.currencies;
  }

  getCurrencyByTicker(ticker: string): PoolModel.Currency {
    return this.currencies.find((i) => i.ticker === ticker);
  }

  constructor() {}
}
