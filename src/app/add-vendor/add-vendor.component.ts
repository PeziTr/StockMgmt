
import { Component, OnInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { AddVendorDb } from './../service/add-vendor-db';
import { RefreshService } from './../service/refresh-service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css'],
  providers: [AddVendorDb]
})

export class AddVendorComponent implements OnInit {
  title = 'Adding Vendor Details';
  public vendorDetails: FormGroup;
  public vendorAddress: FormGroup;

  constructor(el: ElementRef, private addVendorDb: AddVendorDb, private refreshService: RefreshService) { }

  ngOnInit() {
    this.vendorDetails = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    })


  }

  public postVendorData() {
    console.log(this.vendorDetails.value);
    this.addVendorDb.postVendor(this.vendorDetails.value)
      .subscribe(res => {
        console.log(res);
        if (res.status === 201) {
          console.log("Success");
          this.refreshService.refresh.emit();
        } else {
          console.log("Failed")
        }
      });
  }
}
