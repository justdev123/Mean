import { Component, ViewEncapsulation, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../Services/auth-data.service';
@Component({
     templateUrl: './Login.html',
     styles: [require('../../../assets/css/Login.css'),
     require('../../../assets/css/styles.css')],
     providers: [AuthenticationService],
   encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
    signupForm : FormGroup;
    submitted : boolean;
    status : string = '';
    public edited = false;
    public responsecode= '';
    public responsedescription = '';
    constructor(private fb: FormBuilder,private _router : Router,
    private _activatedRoute: ActivatedRoute,private _authService:AuthenticationService){
        this.signupForm= fb.group({
            'username':[null,Validators.required],
            'password':[null,Validators.required]
        })
    }

    ngOnInit(){
         this.status = this._activatedRoute.snapshot.params['status'];
         this.ShowMessageBox();
    }

    onRegister()
    {
        this._router.navigate(['Register']);
    }
    onSubmit(model:any,isValid:boolean){
        this.submitted=true;
        if(isValid)
        {
            this._authService.login(model.username,model.password).subscribe(res=>{
                     if (res['StatusCode'] == '1') {
                        if(res["RecordSet"]["token"]!=null)
                        {
                            console.log('logged in');
                        }
                    }else{
                             this.status = res['StatusCode'];
                             this.ShowMessageBox();
                    }
            });
        }

    }

    private ShowMessageBox(){
        this.edited=true;
        setTimeout(function(){
            this.edited=false;
        }.bind(this),3000);
    }
}