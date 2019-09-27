// import { Component, OnInit } from '@angular/core';
// import { OrdersService } from '../shared/orders.service';


// @Component({
//   selector: 'app-order-list',
//   templateUrl: './order-list.component.html',
//   styleUrls: ['./order-list.component.css']
// })
// export class OrderListComponent implements OnInit {
//   constructor(private ordersService: OrdersService) {}

//   hamburguesaOrders;

//   ngOnInit() {
//     this.getHamburguesaOrders();
//   }

//   getHamburguesaOrders = () =>
//     this.ordersService
//       .getHamburguesaOrders()
//       .subscribe(res => (this.hamburguesaOrders = res))

//   deleteOrder = data => this.ordersService.deleteHamburguesaOrder(data);

//   markCompleted = data => this.ordersService.updateHamburguesaOrder(data);
// }
