import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDialogBillComponent } from '../modal-dialog-bill/modal-dialog-bill.component';

@Component({
  selector: 'app-bill-client',
  templateUrl: './bill-client.component.html',
  styleUrls: ['./bill-client.component.css']
})
export class BillClientComponent {
  cash :number
  favoriteSeason: string;
  pays: string[] = ['Cuenta Completa', 'Dividir por persona', 'Dividir equitativamente'];
  percentages: string[]=['10%', '15%','Otro'];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalDialogBillComponent, {  
  
    });
  }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.cash = result;
    // });
 
}



// @Component({
//   selector: 'modal-pay-cash-component',
//   templateUrl: './modal-dialog-bill/modal-dialog-bill.html',
//   styleUrls: ['./modal-dialog-bill/modal-dialog-bill.css'] 

//  })
// export class ModalDialogBillComponent {
//   constructor(public dialogRef: MatDialogRef<ModalDialogBillComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }