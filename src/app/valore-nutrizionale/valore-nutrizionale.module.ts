import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoreNutrizionalePageRoutingModule } from './valore-nutrizionale-routing.module';

import { ValoreNutrizionalePage } from './valore-nutrizionale.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoreNutrizionalePageRoutingModule,
   
    
  ],
  declarations: [ValoreNutrizionalePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ValoreNutrizionalePageModule {}
