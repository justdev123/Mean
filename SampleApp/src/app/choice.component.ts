import { Component, Directive } from '@angular/core';
import { Router, RouterModule,Routes ,ROUTER_CONFIGURATION } from '@angular/router';


@Component({

  templateUrl: './choice.component.html',
   styleUrls: ['./app.component.css'],
})

export class ChoiceComponent {
public signupimage : string ="./app/Images/sign_up_button.png";

constructor(private _router:Router)
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