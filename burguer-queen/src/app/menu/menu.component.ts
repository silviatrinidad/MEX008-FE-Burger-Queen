import {Component} from '@angular/core';
import {OrdersService} from '../shared/orders.service';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  constructor(public orderService: OrdersService) {
  }

  showFiller = false;
  'products' = [
    {
      name: 'Soberbia',
      datalle: {
        pan: ['masa Madre', 'tradicional'],
        type: {
          combo: 65,
          individual: 50
        },
        ingredientes: ['Con todo', 'Sin'],
        Especificaciones: []
      }
    },

    {
      name: 'Malicia',
      detalle: {
        pan: ['masa madre', 'tradicional'],
        type: {
          combo: 65,
          individual: 50
        },
        ingredientes: ['Con todo', 'Sin'],
        Especificaciones: []
      }
    },

    {
      name: 'Gula',
      detalle: {
        pan: ['masa madre', 'tradicional'],
        type: {
          combo: 65,
          individual: 50
        },
        ingredientes: ['Con todo', 'Sin'],
        Especificaciones: []
      }
    },

    {
      name: 'Encarnación',
      detalle: {
        pan: ['masa madre', 'tradicional'],
        type: {
          combo: 65,
          individual: 50
        },
        ingredientes: ['Con todo', 'Sin'],
        Especificaciones: [],
      },
    }

  ];


  totalOrder = 0;
  // Array temporal
  tempOrder = [];
  OrdersService: any;


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onAddProduct(product) {
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.type);
    this.tempOrder.push(product.name);
  }

  removeItemOrder = (order) => {
    const index = this.tempOrder.indexOf(order);
    if (index > -1) {
      this.tempOrder.splice(index, 1);
    }

    // onSubmit() {
    //   console.log(this.orderService.myForm.value);
    // }
  }
}
