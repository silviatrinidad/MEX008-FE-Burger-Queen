// import { Injectable } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/firestore';


// @Injectable({
//   providedIn: 'root'
// })
// export class OrdersService {
//   constructor(private firestore: AngularFirestore) {}

//   form = new FormGroup({
//     customerName: new FormControl(''),
//     orderNumber: new FormControl(''),
//     hamburguesa: new FormControl(''),
//     completed: new FormControl(false)
//   });

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
// }