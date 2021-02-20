import { Address } from './address';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private firestore:AngularFirestore) { }

  saveAddress(address: Address) {
    this.firestore.collection("address").add({...address});
    console.log("SAVED");
  }

  readAddress(){
    return this.firestore.collection("address").snapshotChanges();
  }

}
