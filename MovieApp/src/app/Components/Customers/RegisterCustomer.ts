import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { CustomerDataService } from '../../Services/customer-data.service';
@Component({
    templateUrl: './RegisterCustomer.html',
    styles: [require('../../../assets/css/Customer.css'),
    require('../../../assets/css/styles.css')],
    providers:[CustomerDataService]
})
export class RegisterCustomerComponent{
 registrationForm : FormGroup;
 maxDate: Date;
 submitted: boolean;
 edited: boolean = false;
  status: string = '';
 constructor(private fb:FormBuilder,private _customerdataService : CustomerDataService){
     this.maxDate= new Date();
    
     this.registrationForm = fb.group({
         'firstname': [null, Validators.required],
         'lastname': [null, Validators.required],
         'email': [null, Validators.required],
         'phone': [null, Validators.required],
         'dob': [null, Validators.required],
     })
 }

 onSubmit(model:any,isvalid:boolean){
     this.submitted=true;
     if(isvalid){
        this._customerdataService.insertCustomer(model).subscribe((res)=>{
            console.log(res);
            console.log(res["StatusCode"]);
            this.status = res["StatusCode"];
            this.ShowMessageBox();
        })
     }
 }

     private ShowMessageBox() {
        this.edited = true;
        setTimeout(function () {
            this.edited = false;
        }.bind(this), 5000);
    }
}