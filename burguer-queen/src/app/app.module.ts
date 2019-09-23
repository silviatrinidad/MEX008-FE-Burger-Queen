import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
// Módulo de animación
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PruebaComponent} from './prueba/prueba.component';
// Modulo de FlexLayout
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {LateralBarComponent} from './lateral-bar/lateral-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
// Componentes que contienen la pagina de las mesas-barras y la comanda respectivamente
import { InitContainerComponent } from './init-container/init-container.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { BillComponent } from './bill/bill.component';
import { BillClientComponent } from './bill-client/bill-client.component';
import { MenuComponent} from './menu/menu.component';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BarTotalComponent } from './bar-total/bar-total.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { ModalDialogBillComponent } from './modal-dialog-bill/modal-dialog-bill.component';



@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LateralBarComponent,
    InitContainerComponent,
    TakeOrderComponent,
    BillComponent,
    BillClientComponent,
    BarTotalComponent,
    MenuComponent,
    ModalDialogBillComponent,
    OrderListComponent,
    OrdersComponent,
    ModalDialogBillComponent,
  
  
  ],
  entryComponents:[ModalDialogBillComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


