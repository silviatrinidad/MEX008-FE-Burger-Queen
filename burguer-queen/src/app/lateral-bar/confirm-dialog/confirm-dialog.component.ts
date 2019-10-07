import {Component, OnInit, Inject, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UserService} from '../../user.service';
import {concatAll} from 'rxjs/operators';
import {matDrawerAnimations} from '@angular/material/sidenav';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public authService: UserService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {
  }
  email: string;
  password: string;
  msg: string;
  display = false;



  ngOnInit() {
  }


  login() {
    const user = this.authService.login('viridiana.avem@gmail.com', this.password);
    user.then(value => {
      this.msg = value;
      this.display = true;
      sessionStorage.setItem('log', 'true');
      this.dialogRef.close({ logged: true });

    })
      .catch(err => {
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
