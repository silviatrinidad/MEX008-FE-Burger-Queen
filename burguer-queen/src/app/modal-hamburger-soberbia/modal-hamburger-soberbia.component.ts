import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-modal-hamburger-soberbia',
  templateUrl: './modal-hamburger-soberbia.component.html',
  styleUrls: ['./modal-hamburger-soberbia.component.css']
})
export class ModalHamburgerSoberbiaComponent implements OnInit {
  constructor(public dialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModalHamburgerSoberbiaComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() {

  }


}

