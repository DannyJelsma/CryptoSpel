declare namespace PoolModel {
  export interface Currency {
    id: number;
    name: string;
    icon: string;
    ticker: string;
    price: number;
    previous_price: number;
  }
}
