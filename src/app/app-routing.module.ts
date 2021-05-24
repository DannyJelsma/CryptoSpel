import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthLayoutComponent } from './_layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

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

  // Auth routes
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'test/:id', component: AboutComponent }
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
