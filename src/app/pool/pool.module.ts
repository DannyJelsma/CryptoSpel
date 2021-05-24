import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    CreateComponent,
    JoinComponent,
    CurrenciesComponent,
    CurrencyComponent,
    DashboardComponent,
  ],
  imports: [CommonModule],
})
export class PoolModule {}
