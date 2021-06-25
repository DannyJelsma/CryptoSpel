import { UserService } from './../user.service';
import { CurrenciesService } from './../currencies.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {environment} from '@environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  leaderboard: PoolModel.Leaderboard[] = [];
  leaderboardPosition: number;
  assets: PoolModel.Asset[] = [];
  totalPortfolioValue: number;
  pool_id: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private currenciesService: CurrenciesService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((params) => {
      let { id: pool } = params;
      this.pool_id = pool;
    });

    // fetch portfolio
    this.http
      .get(`${environment.backendUrl}/pool/assets/${this.pool_id}`)
      .subscribe(async (response: any) => {
        try {
          for (let i = 0; i < response.length; i++) {
            let asset = response[i];
            const metadata = await this.currenciesService.getCurrencyByTicker(
              asset.ticker
            );

            this.assets.push({
              id: i,
              name: metadata.name,
              ticker: asset.ticker,
              native_amount: asset.amount,
              amount: asset.amount * metadata.price,
              icon: metadata.icon,
            });
          }

          // calculate portfolio value
          this.totalPortfolioValue = this.assets.reduce(
            (previous, current) => previous + current.amount,
            0
          );
          console.log(response);
        } catch (err) {
          console.error(err);
        }
      });

    // fetch leaderboard
    this.userService
      .getPoolData(this.pool_id)
      .then((userData: PoolModel.UserData) => {
        this.http
          .get(`${environment.backendUrl}/pool/leaderboard/${this.pool_id}`)
          .subscribe(async (leaderboard: PoolModel.Leaderboard[]) => {
            this.leaderboard = leaderboard.map((i, index) => {
              i.position = index + 1;
              if (userData.username === i.username)
                this.leaderboardPosition = i.position;
              return i;
            });
          });
      })
      .catch(console.error);
  }
}
