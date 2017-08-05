import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AddVendorDb{

    constructor(private _http:Http){}

    public postVendor(data): any{
        console.log("inside service post");
                
        let searchUrl = "http://localhost:28017/mock/tbl_vendor/";
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });
        
        console.log(JSON.stringify(data));
        
        return this._http.post(searchUrl, JSON.stringify(data), options)
        // .map(res => {console.log("RES.JSON"+res.json())});
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     
  }


}


