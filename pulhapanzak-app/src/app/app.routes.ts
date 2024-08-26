import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home-module/pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'register-page',
    pathMatch: 'full',
  },
  {
    path: 'register-page',
    loadComponent: () => import('../app/auth/pages/register-page/register-page.page').then( m => m.RegisterPagePage)
  },
  {
    path: 'login-page',
    loadComponent: () => import('./auth/pages/login-page/login-page.page').then( m => m.LoginPagePage)
  },
];
