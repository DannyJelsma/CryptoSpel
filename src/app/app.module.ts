import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PoolModule } from './pool/pool.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from './_shared/shared.module';
import { HeaderComponent } from './_layout/header/header.component';
import {JwtModule} from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200", "localhost:3000"],
        disallowedRoutes: [
          "http://localhost:4200/login/",
          "http://localhost:4200/register/",
          "http://localhost:3000/user/login",
          "http://localhost:3000/user/register"
        ],
      },
    }),
    AuthModule,
    AppRoutingModule,
    PoolModule,
    HighchartsChartModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
