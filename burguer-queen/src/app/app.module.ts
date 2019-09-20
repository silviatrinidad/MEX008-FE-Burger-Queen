import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
// Módulo de animación
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PruebaComponent} from './prueba/prueba.component';
// Módulo de grid
import {MatGridListModule} from '@angular/material/grid-list';
// Modulo de FlexLayout
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {LateralBarComponent} from './lateral-bar/lateral-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//Componentes que contienen la pagina de las mesas-barras y la comanda respectivamente
import { InitContainerComponent } from './init-container/init-container.component';
import { TakeOrderComponent } from './take-order/take-order.component';
<<<<<<< HEAD
import { StateOrdenComponent } from './state-orden/state-orden.component';

=======
import { MenuComponent } from './menu/menu.component';
import { Component, OnInit } from '@angular/core';
import { Prueba2Component } from './prueba2/prueba2.component';
>>>>>>> 5739e83f217cc5e78142c90f26e5a5eb6cac7c75



@NgModule({
  exports:[MatGridListModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LateralBarComponent,
    InitContainerComponent,
    TakeOrderComponent,
<<<<<<< HEAD
    StateOrdenComponent,
=======
    MenuComponent,
>>>>>>> 5739e83f217cc5e78142c90f26e5a5eb6cac7c75
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
