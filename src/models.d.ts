declare namespace PoolModel {
  export interface Currency {
    id: number;
    name: string;
    icon: string;
    graph: string;
    ticker: string;
    price: number;
    previous_price: number;

    // Optional (computed) values
    change?: number;
    relative_change?: number;
  }

  export interface Coin {
    history: Array<Price>;
  }

  export interface Price {
    date: number;
    price: number;
  }

  export interface Asset {
    id: number;
    name: string;
    ticker: string;
    native_amount: number; // amount in native currency
    amount: number; // amount in euro
    icon: string;
  }
}

declare namespace UserModel {
  export interface Pool {
    _id: string;
    name: string;
    end_date: Date;
    budget: number;

    // Optional (computed) values
    ends_in_days?: number;
  }
}
