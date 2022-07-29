import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoreNutrizionalePage } from './valore-nutrizionale.page';

const routes: Routes = [
  {
    path: '',
    component: ValoreNutrizionalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoreNutrizionalePageRoutingModule {}
