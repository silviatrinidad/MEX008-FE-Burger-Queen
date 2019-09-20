import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-bill-client',
  templateUrl: './bill-client.component.html',
  styleUrls: ['./bill-client.component.css']
})
export class BillClientComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
