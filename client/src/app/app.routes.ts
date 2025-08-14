import { Routes } from '@angular/router';
import { noAuthGuard } from './core/guards/noAuth.guard';
import { NotFound } from './shared/components/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('../app/features/home/home').then(comp => comp.Home) },
    { path: 'login', loadComponent: () => import('../app/features/auth/login/login').then(comp => comp.Login), canActivate: [noAuthGuard] },
    { path: 'register', loadComponent: () => import('../app/features/auth/register/register').then(comp => comp.Register), canActivate: [noAuthGuard] },
    { path: 'themes', loadComponent: () => import('./features/themes/themes/themes').then(comp => comp.Themes) },
    { path: '**', component: NotFound }
];
