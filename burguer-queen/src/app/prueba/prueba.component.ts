import {Component, ViewChild, ElementRef} from '@angular/core';  
import { MatDialog } from '@angular/material/dialog';

//Yael 
import { ModalTableOrdenComponent } from '../modal-table-orden/modal-table-orden.component'

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-prueba',
  templateUrl: 'prueba.component.html',
  styleUrls: ['prueba.component.css'],
})
export class PruebaComponent {
  tiles: Tile[] = [];
//silvia
  isActive = true;
  save(e) {
      console.log('Le diste click al boton 2');
    }
  //Yael
  constructor(public dialog: MatDialog){}
    openModal(){
      this.dialog.open(ModalTableOrdenComponent);
    }
  }

