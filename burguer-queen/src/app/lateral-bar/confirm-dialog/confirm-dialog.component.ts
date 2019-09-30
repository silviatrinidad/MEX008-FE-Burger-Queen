import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserService} from '../../user.service';
import {concatAll} from "rxjs/operators";




@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  email: string;
  password: string;
  msg: string;
  display = false;

  constructor(public authService: UserService,
              public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }

  onClickNO(): void {
  this.dialogRef.close();
  }

  login() {
    const user = this.authService.login('viridiana.avem@gmail.com', this.password);
    user.
    then(value => {
      this.msg = value;
      this.display = true;
      console.log(value);
      sessionStorage.setItem('log', 'true');
    })
      .catch(err => {
        console.log('Algo fue mal:', err.message);
        this.msg = err.message;
        this.display = true;
      });
    this.email = '';
    this.password = '';
  }
  add(s) {
    if (this.password === undefined) {
      this.password = '' + s.toString();
    } else {
      this.password = this.password + s.toString();
    }
  }

}
