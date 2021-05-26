import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HomeComponent } from './home/home.component';
import { CurrenciesComponent } from './pool/currencies/currencies.component';

const routes: Routes = [
  // App routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'profile', component: ProfileComponent }
    ],
  },

  // In-pool routes
  {
    path: 'pool/:id',
    children: [{ path: 'currencies', component: CurrenciesComponent }],
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
