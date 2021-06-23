import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {
  currencies: PoolModel.Currency[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currenciesService: CurrenciesService
  ) {}

  getCurrencies(): void {
    this.currenciesService.getCurrencies().then((currencies) => {
      this.currencies = currencies.map((i) => {
        i.change = i.price - i.previous_price;
        i.relative_change = i.change / i.previous_price;
        return i;
      });
    });
  }

  currencyClicked(name: string): void {
    // redirect to <currentURI>/currency/:name
    this.router.navigate([`../currency/${name.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}
