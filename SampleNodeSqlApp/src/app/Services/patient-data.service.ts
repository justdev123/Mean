import { Injectable } from '@angular/core';


import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
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
        console.log('bodyString=');
        console.log(bodyString);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.patientApiUrl, bodyString, {headers: headers}).subscribe();
                        
    }


}