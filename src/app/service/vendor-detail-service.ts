import { Injectable } from '@angular/core';

@Injectable()
export class VendorDetailService{

    public vendorRecord = [
        {id:'v1',name:'Dabur',email:'mail@dabur.com',phone:'9898989898'},
        {id:'v2',name:'Amul',email:'mail@amul.com',phone:'8989898989'},
        {id:'v3',name:'Balaji',email:'mail@balaji.com',phone:'7878787878'},
        {id:'v4',name:'Hindustan Unilever',email:'mail@hindustan.com',phone:'6566767677'},
        {id:'v5',name:'Chitale',email:'mail@chitale.com',phone:'5656789043'},
        {id:'v6',name:'Kwality',email:'mail@kwality.com',phone:'6445456656'}        
    ];

    public getVendor (){
        console.log("inside service method");
        console.log(this.vendorRecord);
        return this.vendorRecord;
    }
}