import { Injectable } from '@angular/core';
import { Customer } from '../Models/Customer';
import { Http, Response,Request,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerDataService{
    customers : Customer[] = [];

    constructor(private _http: Http) {}
       public customerApiUrl = 'http://localhost:3000/api/customers';
 
    getAllCustomers(): Observable<Customer[]>{
      
        return this._http.get(this.customerApiUrl)
                       .map((res)=> res.json())
            .do(res => console.log('Get API Log :',res))
           .catch((error)=> Observable.throw(error.json().error || 'Server Error'));
    }
 
    insertCustomer(body:Object){
        let bodystring = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type':  'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
       
        return this._http.post(this.customerApiUrl,bodystring,options)
                    .map((res)=>{res.json()})
                   .do(data => console.log('POST API Log :',data))
                   .catch(this._serverError);
    }

      private _serverError(err:any)
        {
            console.log('server error :',err);
            if(err instanceof Response)
            {
                return Observable.throw(err.json() || 'backend server error');
            }

            return Observable.throw(err || 'backend server error');
        }
}