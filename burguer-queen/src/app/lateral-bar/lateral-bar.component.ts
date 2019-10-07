import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lateral-bar',
  templateUrl: 'lateral-bar.component.html',
  styleUrls: ['lateral-bar.component.css'],
})
export class LateralBarComponent {

  events: string[] = [];
  opened: boolean;
  testVariable: boolean = false;
  mode = ('mode');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  // @ts-ignore
  // @ts-ignore
  constructor(
    public dialog: MatDialog,
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      this.testVariable = res.logged;
    });
  }

  estaLogeado() {
    let log;
    log = sessionStorage.getItem('log');
    if (log !== null) {
      return log.toString() === 'true';
    } else {
      return false;
    }
  }

}






