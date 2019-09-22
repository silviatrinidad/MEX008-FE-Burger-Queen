import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { MatMenu } from '@angular/material/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

@ViewChild('submenu',{ static: false,})
set subMenu(value: MatMenu)  {
  this.menuItems[1].elementRef = value;
}

  selected :string;
menuItems: Array<{text: string, elementRef: MatMenu}> = [
    {text: "Tabledriven.Item1", elementRef: null },
    {text: "Tabledriven.Item2", elementRef: null},
  ];

  select(pText :string)
  {
    this.selected = pText;
  }
}
