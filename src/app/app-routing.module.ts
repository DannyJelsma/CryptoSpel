import { JoinComponent } from './pool/join/join.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HomeComponent } from './home/home.component';
import { CurrenciesComponent } from './pool/currencies/currencies.component';
import { CurrencyComponent } from './pool/currency/currency.component';
import { CreateComponent } from './pool/create/create.component';
import { DashboardComponent } from './pool/dashboard/dashboard.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'pool/create', component: CreateComponent, canActivate: [AuthGuard] },
      // { path: 'profile', component: ProfileComponent }
    ],
  },

  // In-pool routes
  {
    path: 'pool/:id',
    component: AppLayoutComponent,
    children: [
      { path: 'join', component: JoinComponent },
      { path: 'currencies', component: CurrenciesComponent },
      { path: 'currency/:name', component: CurrencyComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },

  // Auth routes
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  // No layout routes

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
