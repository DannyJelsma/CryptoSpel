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
  amountToTransact: number = 0.0;
  sidebarContent: string = 'buy';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  currency: PoolModel.Currency;
  dailyChange: number;

  constructor(
    private route: ActivatedRoute,
    private currenciesService: CurrenciesService
  ) {}

  onAmountChange(event) {
    this.amountToTransact = event.target.value;
  }

  switchSidebarContent(switchTo: string) {
    this.sidebarContent = switchTo;
  }

  doTransaction(type: string) {
    if (type === 'buy') {
      confirm('u spend ' + this.amountToTransact + '?');
    } else if (type === 'sell') {
      confirm('u about to get ' + this.amountToTransact);
    }
  }
  //doPurchase
  // https://www.npmjs.com/package/angular-notifier

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { name } = params;
      this.currency = this.currenciesService.getCurrencyByName(name);
      this.dailyChange = this.currency.price - this.currency.previous_price;
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
      scrollbar: {
        enabled: false,
      },
      xAxis: {
        type: 'datetime',
        gridLineWidth: 0,
        lineWidth: 0,
        tickLength: 0,
      },
      yAxis: {
        gridLineWidth: 0,
        labels: {
          align: 'left',
        },
      },
    };
  }
}
