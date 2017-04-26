import { Injectable } from '@angular/core';


import { Http, Response,Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Patient } from '../Models/patient.interface';
import { Headers, RequestOptions } from '@angular/http';
import { HeaderComponent } from '../Header.component';
@Injectable()
export class PatientDataService {

    patients : Patient[] =[];


    constructor(private _http: Http) { }

    public patientApiUrl = 'http://localhost:3000/api/patients';
    
  /* addToPatient(patient: Patient)
    {
        console.log('DOB='+ patient.DateOfBirth);
        console.log('Q1='+ patient.question1);
        console.log('Q2='+ patient.question2);
 
        console.log('patientFN='+ patient.firstName);
        console.log('patientlN='+ patient.lastName);

        console.log('patientEmail='+ patient.email);

        console.log('patientPhone='+ patient.phone);
        this._http.post('http://localhost:3000/api/addpatient',{patient})
                  .map((res)=>res.json());
        //return null;
            //return $http.post('/api/v1/patient', patient);
    }*/

    getAllPatients(): Observable<Patient[]>
    {
       console.log('get all patients');
        return this._http.get(this.patientApiUrl)
                   .map((res)=>res.json())
                   .catch((error) => Observable.throw(error.json().error || 'Server Error'));
          
    }


    addPatient(body: Object) 
    {
        
        let bodyString = JSON.stringify(body); // Stringify payload
     
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.patientApiUrl, bodyString, {headers: headers})
                   .map((res)=>res.json())
                   .do(data => console.log('POST API Log :',data))
                   .catch((error) => Observable.throw(error.json().error || 'Server Error'));
                        
    }

    getPatientById(id:AAGUID): Observable<Patient>
    {
        let url =this.patientApiUrl+'/'+id;
        return this._http.get(url)
            .map((res) => res.json())
            .catch((error) => Observable.throw(error.json().error || 'Server Error'));
    }

    updateById(body:Patient)
    {

        let bodyString = JSON.stringify(body); // Stringify payload
        let url =this.patientApiUrl+'/'+body._id;
        console.log(bodyString);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        console.log(url);
        return this._http.put(url,bodyString,{headers:headers})
            .map((res)=>res.json())
            .do(data => console.log('PUT API Log :',data))
            .catch(this._serverError);
    }

    delete(body:Patient)
    {
        let bodyString = JSON.stringify(body); // Stringify payload
        let url =this.patientApiUrl+'/'+body._id;
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
       // console.log( url);
        return this._http.delete(url,options)
               .map((res)=>res.json())
               .do(data => console.log('DELETE API Log : ',data))
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