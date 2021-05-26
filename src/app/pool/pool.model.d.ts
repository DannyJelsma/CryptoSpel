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
}
