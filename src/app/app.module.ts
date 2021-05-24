import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PoolComponent } from './pool/pool.component';
import { PoolCurrenciesComponent } from './pool-currencies/pool-currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    PoolComponent,
    PoolCurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
