import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../../Services/patient-data.service';
@Component({

  templateUrl: './thankyou.component.html',
 providers:[PatientDataService]
})


export class ThankYouComponent implements OnInit {

constructor(private patientService: PatientDataService) {}
ngOnInit(){

    
    this.patientService.getAllPatients().subscribe((data)=>{
   //data is your patient list

      console.log(data);
    })
}

}