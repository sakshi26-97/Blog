import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  getPosts() {
    return this.afs.collection('posts').snapshotChanges();
  }

  getPostInfoById(docId) {
    return this.afs.collection('posts').doc(docId).valueChanges();
  }
}
