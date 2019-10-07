import { Component, OnInit } from '@angular/core';
import {MenuComponent} from '../menu/menu.component'
import {OrdersService} from '../shared/orders.service'

@Component({
  selector: 'app-modal-hamburger-soberbia',
  templateUrl: './modal-hamburger-soberbia.component.html',
  styleUrls: ['./modal-hamburger-soberbia.component.css']
})
export class ModalHamburgerSoberbiaComponent implements OnInit {
  constructor(private orderService: OrdersService) { }

  "products" = [
    {
      name: "Soberbia",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },
    
    {
      name: "Malicia",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },

    {
      name: "Gula",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    },

    {
      name: "Encarnación",
      pan:["Masa Madre", "Tradicional"],
      type:["Individual","Combo"],
      price:[50, 65],
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    }

  ];

  ngOnInit() {
  }

  totalOrder = 0;
  // Array temporal
  tempOrder = []; 
  OrdersService: any;

   onAddProduct(product){
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.price[0] + product.pan[0] + product.pan[1]);
    console.log(this.totalOrder )
    // Impresión de precio y producto en comanda
    this.tempOrder.push(product.name + " " + "$"+ product.price[0])
  }

  onSubmit(){
    console.log(this.orderService.myForm.value);
    // Agregando al array temporal el # de orden y el cliente
    this.orderService.myForm.value.order = this.tempOrder;
    let data = this.orderService.myForm.value;
    // console.log(data);
    data.totalOrder = this.totalOrder;
    // llamada al servicio
    this.orderService.createOrders(data);
    // limpiando el array
    this.tempOrder = [];
    // Reinicializando a 0 el total de la orden
    this.totalOrder=0;
    // Reinicializando el formulario
    this.orderService.myForm.reset();
  }



  }