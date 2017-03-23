import { Injectable } from '@angular/core';
import { Patient } from '../patient.interface';




@Injectable()
export class PatientDataService {

    patients : Patient[] =[];


    constructor() { }

    addToPatient(patient: Patient): PatientDataService
    {
            //return $http.post('/api/v1/patient', patient);
    }

    getAllPatients(): Patient[]
    {
        //return $http.get('/api/v1/patients');
    }



}