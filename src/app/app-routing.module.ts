import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OuthGuard } from './guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [OuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'registrati',
    loadChildren: () => import('./registrati/registrati.module').then( m => m.RegistratiPageModule),
    canLoad: [OuthGuard]
  },
  {
    path: 'bambino',
    loadChildren: () => import('./bambino/bambino.module').then( m => m.BambinoPageModule),
    canLoad: [OuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [OuthGuard]
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule),
    canLoad: [OuthGuard]
  },
  {
    path: 'valore-nutrizionale',
    loadChildren: () => import('./valore-nutrizionale/valore-nutrizionale.module').then( m => m.ValoreNutrizionalePageModule),
    canLoad: [OuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
