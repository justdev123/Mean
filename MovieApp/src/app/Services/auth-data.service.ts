import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthenticationService {
    constructor(private _http: Http) { }
    public userAuthenticateApiUrl = 'http://localhost:3000/api/users/authenticate';
    login(username: string, password: string) {

        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        let body = JSON.stringify({ username: username, password: password })
        console.log(body);
        return this._http.post(this.userAuthenticateApiUrl, body, options)
            .map((res) => {
                if (res.json().StatusCode == "1") {
                    localStorage.setItem('token', res.json().RecordSet.token);
                    localStorage.setItem('username', res.json().RecordSet.username);

                } else {

                    localStorage.clear();
                }
                localStorage.setItem('StatusCode', res.json().StatusCode);

            })
            // .do(data => console.log('POST API Log :', localStorage.getItem('token')))
            .catch(this._serverError);



    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        if (localStorage.getItem('token') != null) {
            return true;
        } else {
            return false;
        }
    }
    private _serverError(err: any) {
        console.log('server error :', err);
        if (err instanceof Response) {
            return Observable.throw(err.json() || 'backend server error');
        }

        return Observable.throw(err || 'backend server error');
    }
}