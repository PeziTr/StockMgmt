import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AddCategoryDb {

    constructor(private _http: Http) { }

    public postCategory(data): any {
        console.log("inside service- Category post");

        let searchUrl = "http://localhost:28017/mock/category/";
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: headers });

        console.log(JSON.stringify(data));

        return this._http.post(searchUrl, JSON.stringify(data), options);
    }
}


