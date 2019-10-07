import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class UserService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }


  login(email: string, password: string): any {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.firebaseAuth.auth.signOut();
  }
}
