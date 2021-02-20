import { AddressService } from './../address.service';
import { Address } from './../address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  formData: Address = new Address();
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.formData);
    this.addressService.saveAddress(this.formData);
  }

}
