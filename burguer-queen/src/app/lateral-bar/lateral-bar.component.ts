
import { Component, OnInit } from '@angular/core';

import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'app-lateral-bar',
  templateUrl: 'lateral-bar.component.html',
  styleUrls: ['lateral-bar.component.css'],
})
export class LateralBarComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}





