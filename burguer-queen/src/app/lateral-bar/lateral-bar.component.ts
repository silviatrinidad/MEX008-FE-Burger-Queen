import {Component, ViewChild, OnInit } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';


/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'app-lateral-bar',
  templateUrl: 'lateral-bar.component.html',
  styleUrls: ['lateral-bar.component.css'],
})
export class LateralBarComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(
    public dialog: MatDialog
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}







