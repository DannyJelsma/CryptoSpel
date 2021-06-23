import { CurrenciesService } from './../currencies.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  assets: PoolModel.Asset[] = [];
  totalPortfolioValue: number;
  pool_id: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private currenciesService: CurrenciesService
  ) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((params) => {
      let { id: pool } = params;
      this.pool_id = pool;
    });

    // fetch portfolio
    this.http
      .get(`http://localhost:3000/pool/assets/${this.pool_id}`)
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
  }
}
