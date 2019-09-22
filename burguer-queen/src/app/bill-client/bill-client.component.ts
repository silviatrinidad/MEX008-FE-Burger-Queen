import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
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
    this.dialog.open(ModalPayCashComponent, {  
      data: {
        animal: 'panda'
      }
    });
  }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.cash = result;
    // });
 
}



@Component({
  selector: 'modal-pay-cash-component',
  templateUrl: '../modal-pay-cash.component.html',

})
export class ModalPayCashComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}