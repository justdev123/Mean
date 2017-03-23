import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../../Services/patient-data.service';
@Component({

  templateUrl: './thankyou.component.html',
 providers:[PatientDataService]
})


export class ThankYouComponent implements OnInit {

constructor(private patientService: PatientDataService) {}
ngOnInit(){
console.log(this.patientService.getAllPatients());
}

}