import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GetCategoryDb {
    headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin'
    });

    options = new RequestOptions({ headers: this.headers });
    
    constructor(private service: Http) {

    }


    public getCategory(){
        console.log("inside getCategory() in DB Service");
        return this.service.get('http://localhost:28017/mock/category/', this.options);

    }
}
