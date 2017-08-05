import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MongoVendorService {
    headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin'
    });

    options = new RequestOptions({ headers: this.headers });
    
    constructor(private service: Http) {

    }


    public getVendor(){
        console.log("inside getVendor() in DB Service");
        return this.service.get('http://localhost:28017/mock/tbl_vendor/', this.options);

    }

    public deleteVendor(id:string){
        console.log("inside deleteVendor() in DB");
        console.log(id);
        return this.service.delete('http://localhost:28017/mock/tbl_vendor/',id);
    }
}
