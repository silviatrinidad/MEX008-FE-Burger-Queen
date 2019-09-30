import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
// import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})



export class OrdersComponent implements OnInit {

  constructor() {}
  "products" = [
    {
      name: "Soberbia",
      datalle:{
      pan:["masa Madre", "tradicional"],
      type:{
        combo:65,
        individual:50
        },
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
      }
    },
    
    {
      name: "Malicia",
      detalle:{
      pan:["masa madre", "tradicional"],
      type:{
        combo:65,
        individual:50
      },
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    }
    },

    {
      name: "Gula",
      detalle:{
      pan:["masa madre", "tradicional"],
      type:{
        combo:65,
        individual:50
      },
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    }
    },

    {
      name: "Encarnación",
      detalle:{
      pan:["masa madre", "tradicional"],
      type:{
        combo:65,
        individual:50
      },
      ingredientes:["Con todo", "Sin"],
      Especificaciones:[]
    }
    }

  ];



  totalOrder = 0;
  // Array temporal
  tempOrder = []; 


  ngOnInit(){}

  onAddProduct(product){
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.price);
    this.tempOrder.push(product.name)
  }
}






  //SILVIA
  //AGREGANDO CONTADOR
// cantidad = 0;
// sumar() {
//   this.cantidad ++;
// }
// restar() {
//   this.cantidad --;
// }


