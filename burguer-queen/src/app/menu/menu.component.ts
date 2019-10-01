import {Component} from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  showFiller = false;
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
