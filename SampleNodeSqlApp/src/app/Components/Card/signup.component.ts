import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';

import { DateValidator } from '../../CustomValidators/datevalidator';
import {CalendarModule,ButtonModule} from 'primeng/primeng';



@Component({
  
  templateUrl: './signup.component.html',
  styles: [require('../../../assets/css/app.component.css')]

})


export class SignUpComponent {

    signUpForm : FormGroup;
    maxDate: Date;
    public submitted: boolean;
    public continueimage : string ="./assets/images/continue1.jpg";
    
    constructor(private _router: Router, fb: FormBuilder)
    {
      this.maxDate = new Date();
      this.signUpForm=fb.group({
        'dob': [null,Validators.compose([Validators.required])],
        'res': [null,Validators.required],
        'ins': [null,Validators.required],
      })
    }

    onSubmit(model:any,isvalid : boolean){
      this.submitted = true;
      if(isvalid && model.ins=="YES")
      {
          this._router.navigate(['insuranceyes',{dob:model.dob.toLocaleDateString(),res:model.res,ins:model.ins}]);
      }
    }
}