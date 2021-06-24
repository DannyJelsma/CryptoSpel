import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '@environment';

interface PoolData {
  [key: string]: PoolModel.UserData;
}

@Injectable({
  providedIn: 'root',
})
// Stores user related information specific to the pool.
export class UserService {
  poolData: PoolData = {};

  constructor(private http: HttpClient) {}

  getPoolData(pool_id: string): Promise<PoolModel.UserData> {
    return new Promise((resolve) => {
      if (this.poolData[pool_id]) {
        resolve(this.poolData[pool_id]);
      } else {
        this.http
          .get(`${environment.backendUrl}/pool/user/${pool_id}`)
          .subscribe(async (response: PoolModel.UserData) => {
            this.poolData[pool_id] = response;
            resolve(response);
          });
      }
    });
  }

  addBalance(pool_id: string, balance: number): void {
    this.poolData[pool_id].balance += balance;
  }
}
