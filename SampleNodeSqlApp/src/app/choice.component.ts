import { Component, Directive, OnInit } from '@angular/core';
import { Router, RouterModule,Routes ,ROUTER_CONFIGURATION } from '@angular/router';
import { PatientDataService } from './Services/patient-data.service';


@Component({

  templateUrl: './choice.component.html',
   styleUrls: ['./app.component.css'],
    providers:[PatientDataService]
})

export class ChoiceComponent implements OnInit {
public signupimage : string ="./app/Images/sign_up_button.png";

ngOnInit(){
 // console.log('choice constructor');
    //console.log(this.patientService.getAllPatients());

  //  this.patientService.getAllPatients().subscribe((data)=>{
   //data is your patient list

     // console.log(data.length);
    //})
}
 constructor(private _router:Router,private patientService: PatientDataService)
 {
 }


signup(){
 // this._router.navigate(['savingscardsignup']);insuranceyes
  this._router.navigate(['cardsignup']);
}

customer(){
  this._router.navigate(['customer']);
}
}