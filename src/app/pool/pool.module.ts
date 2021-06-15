import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreateComponent,
    JoinComponent,
    CurrenciesComponent,
    CurrencyComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class PoolModule {}
