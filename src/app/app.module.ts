import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PoolModule } from './pool/pool.module';
import { HeaderComponent } from './_layout/header/header.component';
import { SharedModule } from './_shared/shared.module';

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
    AuthModule,
    AppRoutingModule,
    SharedModule,
    PoolModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
