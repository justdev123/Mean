import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { AgeValidator } from '../../CustomValidators/validateAge';

@Component({
  
  templateUrl: './signup.component.html',
styleUrls: ['signup.component.css']

})


export class SignUpComponent {

    signUpForm : FormGroup;
    public submitted: boolean;
    public continueimage : string ="./app/Images/continue1.jpg";

    constructor(private _router: Router, fb: FormBuilder)
    {
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
          this._router.navigate(['insuranceyes',{dob:model.dob,res:model.res,ins:model.ins}]);
      }
    }
}