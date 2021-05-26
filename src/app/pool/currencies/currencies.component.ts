import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrenciesService } from '../currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
})
export class CurrenciesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currenciesService: CurrenciesService
  ) {}

  getCurrencies(): any {
    // TODO: move logic to service and add to interface?
    let currencies: any[] = this.currenciesService.getCurrencies();
    return currencies.map((i) => {
      i.change = i.price - i.previous_price;
      i.relative_change = i.change / i.previous_price;
      return i;
    });
  }

  currencyClicked(name: string): void {
    // redirect to <currentURI>/currency/:name
    this.router.navigate([`../currency/${name.toLowerCase()}`], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {}
}
