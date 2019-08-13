import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth: AngularFireAuth ) { }

  signIn=()=> {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
