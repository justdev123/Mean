import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { EqualValidator } from '../../Directives/password-validator.directive';
import { UserDataService } from '../../Services/users-data.service';
import { User } from '../../Models/User';
import { Router ,ActivatedRoute} from '@angular/router';


@Component({
     templateUrl: './Register.html',
     styles: [require('../../../assets/css/Register.css')],
     providers:[UserDataService]
})
export class RegisterComponent{
    registrationForm : FormGroup;
    submitted:boolean;


  

    constructor(private fb: FormBuilder,private _userDataService: UserDataService,private _router : Router){

        this.registrationForm = fb.group({
             'username':[null,Validators.required],
             'email':[null,Validators.required],
             'password':[null,Validators.required],
             'cpassword':[null,Validators.required],

        })

    }

   
    onSubmit(model:User,isValid:boolean){
        this.submitted= true;
        if(isValid)
        {
              this._userDataService.createUser(model).subscribe((res)=>{
                   
                         this._router.navigate(['Login',{status:res['StatusCode']}]);
                   
              })
        }

      
    }

}