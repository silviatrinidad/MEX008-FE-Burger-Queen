import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogStatusOrdenComponent } from '../dialog-status-orden/dialog-status-orden.component'

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-state-orden',
  templateUrl: './state-orden.component.html',
  styleUrls: ['./state-orden.component.css']
})
export class StateOrdenComponent {

  constructor (public dialog: MatDialog) {}
  openDialog(){
    this.dialog.open(DialogStatusOrdenComponent);
  }
}
