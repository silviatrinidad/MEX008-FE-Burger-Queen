import { Component, OnInit } from '@angular/core';
// import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})



export class OrdersComponent implements OnInit {
  // constructor(private ordersService: OrdersService) {}

  //SILVIA
  //AGREGANDO CONTADOR  en orders
cantidad = 0;
sumar() {
  this.cantidad ++;
}
restar() {
  this.cantidad --;
}


  hamburguesas = [
    'Soberbia',
    'Malicia',
    'Gula',
    'Encarnación'
  ];

  hamburguesaOrder = [];

  ngOnInit() {}

  addHamburguesa = hamburguesa => this.hamburguesaOrder.push(hamburguesa);

  removeHamburguesa = hamburguesa => {
    const index = this.hamburguesaOrder.indexOf(hamburguesa);
    if (index > -1) { this.hamburguesaOrder.splice(index, 1); }
  }

  onSubmit() {
    // this.ordersService.form.value.hamburguesaOrder = this.hamburguesaOrder;
    // const data = this.ordersService.form.value;

    // this.ordersService.createHamburguesaOrder(data).then(res => {
    }
    // );
  }
// }
