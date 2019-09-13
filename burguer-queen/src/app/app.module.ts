import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PruebaComponent } from './prueba/prueba.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  exports:[MatGridListModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LateralBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
