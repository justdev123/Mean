import { Injectable } from '@angular/core';
import { Patient } from '../patient.interface';

@Injectable()
export class PatientDataService {

    patients : Patient[] =[];


    constructor() { }

    addToPatient(patient: Patient): PatientDataService
    {
            this.patients.push(patient);
            console.log("add to patient = "+this.getAllPatients().length);
            return this;
    }

    getAllPatients(): Patient[]
    {
        return this.patients;
    }

}