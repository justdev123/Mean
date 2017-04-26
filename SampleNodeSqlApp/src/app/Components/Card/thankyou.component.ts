import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../../Services/patient-data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({

  templateUrl: './thankyou.component.html',
    styles: [require('../../../assets/css/app.component.css')],
 providers:[PatientDataService]
})


export class ThankYouComponent implements OnInit {

constructor(private patientService: PatientDataService,private _router: Router,private activatedRoute: ActivatedRoute) {}

public status : string ='';
ngOnInit(){

this.status=this.activatedRoute.snapshot.params['status'];
   
}
 redirectToPatientList(){
             this._router.navigate(['patientlistprime']);
    }
}