import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {
  constructor(private currenciesService: CurrenciesService) {}

  getCurrencies() {
    // TODO: move logic to service and add to interface?
    let currencies: any[] = this.currenciesService.getCurrencies();
    return currencies.map((i) => {
      i.change = i.price - i.previous_price;
      i.relative_change = i.change / i.previous_price;
      return i;
    });
  }

  ngOnInit(): void {}
}
