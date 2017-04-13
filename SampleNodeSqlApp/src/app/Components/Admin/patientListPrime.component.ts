
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { PatientDataService } from '../../Services/patient-data.service';
import { Patient } from '../../Models/patient.interface';
import {DataTableModule,Column,SharedModule} from 'primeng/primeng';
@Component({
  templateUrl: './patientListPrime.component.html',
  styles: [require('../../../assets/css/app.component.css')],

  providers:[PatientDataService],
})

export class PatientListPrimeComponent implements OnInit {
    patients : Patient[];
    constructor(private  _patientDataService: PatientDataService){
    
    }

    ngOnInit(): void {
        var rowData: any[] = [];
        this._patientDataService.getAllPatients().subscribe((data)=> {
          for (var i = 0; i < data.length; i++) {
                rowData.push({

                    firstname: data[i].firstName, lastname: data[i].lastName, dateofbirth: data[i].DateOfBirth, email: data[i].email, 
                    phone: data[i].phone, q1: data[i].question1, q2: data[i].question2

                });
       
            }
        });
        this.patients=rowData;


}
}