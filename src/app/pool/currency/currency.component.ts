import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrenciesService } from '../currencies.service';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import * as moment from 'moment';

HC_stock(Highcharts);

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  currency: PoolModel.Currency;

  constructor(
    private route: ActivatedRoute,
    private currenciesService: CurrenciesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { ticker } = params;
      this.currency = this.currenciesService.getCurrencyByTicker(ticker);
    });

    // TODO: convert to realtime data
    // generate some sample chart information
    let data = [];
    let currentPrice = this.currency.price;

    for (let i = 0; i < 3 * 365; i++) {
      const date = moment().subtract(i, 'days').valueOf();
      const max = Math.ceil(0.15 * currentPrice);
      const min = Math.floor(-0.15 * currentPrice);
      currentPrice += Math.floor(Math.random() * (max - min + 1) + min);
      data.push([date, currentPrice]);
    }

    data = data.reverse();

    this.chartOptions = {
      series: [
        {
          type: 'line',
          data,
        },
      ],
      xAxis: {
        type: 'datetime',
      },
    };
  }
}
