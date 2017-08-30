import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UpdateVendorDb{

    constructor(private _http:Http){}

    public updateVendor(data): any{
        console.log("inside UpdateVendorDb");
                
        let searchUrl = "http://localhost:28017/mock/tbl_vendor/";
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });

        

        console.log(JSON.stringify(data));
                
  }


}


