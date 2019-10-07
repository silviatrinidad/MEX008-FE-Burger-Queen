import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersCollection: AngularFirestoreCollection<any>;
  orders: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.ordersCollection = afs.collection<any>('orders');
    this.orders = this.ordersCollection.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        //   Recorriendo documentos de firebase
        const data = a.payload.doc.data();
        //    Iteración sobre los documentos
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ));
  }

  myForm = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    order: new FormControl(''),
    completed: new FormControl(false)
  });


  getOrders() {
    return this.orders;
  }

  updateOrders(order: any) {
    return this.ordersCollection.doc(order.id).update(order);
  }

  deleteOrders(id: string) {
    return this.ordersCollection.doc(id).delete();
  }

  createOrders(order: any) {
    return this.ordersCollection.add(order);
  }
}








//   createHamburguesaOrder(data) {
//     return new Promise<any>((resolve, reject) => {
//       this.firestore
//         .collection('hamburguesaOrders')
//         .add(data)
//         .then(res => {
//         }, err => reject(err));
//     });
//   }
//   updateHamburguesaOrder(data) {
//     return this.firestore
//       .collection('hamburguesaOrders')
//       .doc(data.payload.doc.id)
//       .set({ completed: true }, { merge: true });
//   }

//   getHamburguesaOrders() {
//     return this.firestore.collection('hamburguesaOrders').snapshotChanges();
//   }
//   deleteHamburguesaOrder(data) {
//     return this.firestore
//       .collection('hamburguesaOrders')
//       .doc(data.payload.doc.id)
//       .delete();
//   }
