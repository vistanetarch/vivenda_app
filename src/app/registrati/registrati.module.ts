import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistratiPageRoutingModule } from './registrati-routing.module';

import { RegistratiPage } from './registrati.page';
import { BambinoPageModule } from '../bambino/bambino.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistratiPageRoutingModule,
    BambinoPageModule
  ],
  declarations: [RegistratiPage]
})
export class RegistratiPageModule {}
