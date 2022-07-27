import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {Component} from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';  

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    MatRippleModule,
    MatPaginatorModule,
    BrowserAnimationsModule, 
    MatSortModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
