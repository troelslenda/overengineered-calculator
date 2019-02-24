import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreCalculationsService {

  constructor(private afs: AngularFirestore) { }

  public saveCalculation(calculation: string, result: number): void {
    this.afs.collection('calculations').add({
      createdAt : new Date(),
      calculation,
      result
    });
  }

  public loadCalculations() {
    return this.afs.collection('calculations', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}
