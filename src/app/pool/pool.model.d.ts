declare namespace PoolModel {
  export interface Currency {
    id: number;
    name: string;
    icon: string;
    graph: string;
    ticker: string;
    price: number;
    previous_price: number;
  }

  export interface Coin {
    history: Array<Price>;
  }

  export interface Price {
    date: number;
    price: number;
  }
}
