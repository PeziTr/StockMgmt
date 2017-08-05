import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { RefreshService } from './../service/refresh-service';
import { Component, OnInit } from '@angular/core';
import { MongoVendorService } from './../service/get-vendor-db';


@Component({
  selector: 'app-get-vendor',
  templateUrl: './get-vendor.component.html',
  styleUrls: ['./get-vendor.component.css'],
  providers: [MongoVendorService]
})
export class GetVendorComponent implements OnInit {

  title = "Vendors List";
 
  public vendorObj;
  constructor(private vendorDetailService: MongoVendorService, private refreshService:RefreshService) {

  }

  ngOnInit() {
    this.getVendorDetails();
    
    this.refreshService.refresh.subscribe(()=> {this.getVendorDetails();});
    
  }

  public getVendorDetails() {
    console.log("inside getVendorDetails")
    this.vendorDetailService.getVendor().subscribe(
      (value) => {
        console.log("Data is :" + JSON.stringify(value.json().rows));
        this.vendorObj = value.json().rows;
      }, (error) => {
        console.log("Error is :" + error)
      }
    );
  }

  public delVendor(id:string){
    console.log("inside delVendor");
    this.vendorDetailService.deleteVendor(id).subscribe(
      (value) => {
        console.log(value);
      }, (error) => {
        console.log("Error is"+error);
      }


    )
  }
}
