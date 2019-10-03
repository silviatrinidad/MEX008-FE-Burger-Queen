import {Component, ViewChild} from '@angular/core';
import {OrdersService} from '../shared/orders.service';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

//Yael
import { ModalHamburgerSoberbiaComponent } from './../modal-hamburger-soberbia/modal-hamburger-soberbia.component';
/**
 * @title Autosize sidenav
 */

export interface PeriodicElement {
  orderNumber: number;
  customerName: string;
  // products:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  displayedColumns: string[] = ['orderNumber', 'customerName','actions'];
  dataSource= new MatTableDataSource ();

 


  constructor(private orderService: OrdersService, public dialog: MatDialog){}
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
      Especificaciones:[],
    },
    }

  ];

  totalOrder = 0;
  // Array temporal
  tempOrder = []; 
  OrdersService: any;

@ViewChild(MatSort,{static: false}) sort: MatSort;
 
  ngOnInit(){
  //  llamando todas las órdenes
    this.getAllOrders();
  }

  onAddProduct(product){
    console.log(product);
    // suma de todos los precios
    this.totalOrder = (this.totalOrder + product.type);
    this.tempOrder.push(product.name)
  }
  removeItemOrder =(order) =>{
    let index = this.tempOrder.indexOf(order);
    if (index > -1) this.tempOrder.splice(index, 1);
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

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  getAllOrders(){
    this.orderService.getOrders().subscribe(res =>{
      this.dataSource.data = res;
    })
  }
  
  onDelete(id:string){
    this.orderService.deleteOrders(id);
  }
  onChangeStatus(order:any){
    order.completed = true;
    this.orderService.updateOrders(order);
  }

  //Yael
  openDialog(){
    this.dialog.open(ModalHamburgerSoberbiaComponent);
  }
}