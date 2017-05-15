import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { Http, Response,Request,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()
export class UserDataService{
    users: User[] = [];

    constructor(private _http: Http){}

    public userApiUrl = 'http://localhost:3000/api/users';

    createUser(body: Object) : Observable<User[]>{
        let bodyString = JSON.stringify(body); // Stringify payload
     console.log(bodyString);
        let headers      = new Headers({ 'Content-Type':  'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
       
       return this._http.post(this.userApiUrl,bodyString,options)
                    .map((res)=>res.json())
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