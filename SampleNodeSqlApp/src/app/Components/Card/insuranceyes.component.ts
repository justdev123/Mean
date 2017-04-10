import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { PatientDataService } from '../../Services/patient-data.service';

@Component({

  templateUrl: './insuranceyes.component.html',
styles: [require('../../../assets/css/app.component.css')],
providers:[PatientDataService]
})

export class InsurenceYesComponent {
  signUpDetailsForm: FormGroup;
  public submitted : boolean;

  public selectedOption :number ;
public submitimage : string ="./assets/images/submit.jpg";
   public CONTACT_METHOD_TYPE = {
      EMAIL: 'Email',
      PHONE: 'Phone',
      BOTH:'Both'
    };




  constructor(private _router: Router,public fb: FormBuilder,private patientService: PatientDataService,
  private activatedRoute: ActivatedRoute) {
  this.selectedOption=1;
        // we will initialize our form model here
         this.signUpDetailsForm = this.fb.group({
    'firstName': [null, Validators.required],
    'lastName': [null, Validators.required],
    
    'details': [null, Validators.required],
    'confirm': [null, Validators.required],
    'contactMethod':this.initContactMethodFormGroup()
  })
    // subscribe to payment method type changes
this.subscribePaymentTypeChanges();
  this.setContactMethodType(this.CONTACT_METHOD_TYPE.EMAIL);
  }
   setContactMethodType(type: string) {
    console.log(type);
      const ctrl: FormControl = (<any>this.signUpDetailsForm).controls.contactMethod.controls.type;
      ctrl.setValue(type);
    }


initContactMethodFormGroup() {
      // initialize payment method form group

       const group = this.fb.group({
            type: [''],
            Email: this.fb.group(this.initEmailMethodModel()),
            Phone: this.fb.group(this.initPhoneMethodModel()),
            Both: this.fb.group(this.initEmailPhoneMethodModel()),
        });
      
      return group;
    }


subscribePaymentTypeChanges() {
    // controls
    
    const pmCtrl = (<any>this.signUpDetailsForm).controls.contactMethod;
  
    const emailCtrl = pmCtrl.controls.Email;
    const phoneCtrl = pmCtrl.controls.Phone;
    const bothCtrl = pmCtrl.controls.Both;
  console.log(bothCtrl);
    // initialize value changes stream
    const changes$ = pmCtrl.controls.type.valueChanges;

    // subscribe to the stream
    changes$.subscribe(contactMethodType => {
        // EMAIL
        if (contactMethodType === this.CONTACT_METHOD_TYPE.EMAIL) {
            Object.keys(emailCtrl.controls).forEach(key => {
            
                emailCtrl.controls[key].setValidators(this.initEmailMethodModel()[key][1]);
                emailCtrl.controls[key].updateValueAndValidity();
            });

            // remove all validators from phone fields
            Object.keys(phoneCtrl.controls).forEach(key => {
                phoneCtrl.controls[key].setValidators(null);
                phoneCtrl.controls[key].updateValueAndValidity();
            });

            Object.keys(bothCtrl.controls).forEach(key => {
                bothCtrl.controls[key].setValidators(null);
                bothCtrl.controls[key].updateValueAndValidity();
            });
        }

        // PHONE
        if (contactMethodType === this.CONTACT_METHOD_TYPE.PHONE) {

            // remove all validators from bank fields
            Object.keys(emailCtrl.controls).forEach(key => {
                emailCtrl.controls[key].setValidators(null);
                emailCtrl.controls[key].updateValueAndValidity();
            });

            // apply validators to each card fields, retrieve validators from card model
            Object.keys(phoneCtrl.controls).forEach(key => {
                phoneCtrl.controls[key].setValidators(this.initPhoneMethodModel()[key][1]);
                phoneCtrl.controls[key].updateValueAndValidity();
            });

                Object.keys(bothCtrl.controls).forEach(key => {
                bothCtrl.controls[key].setValidators(null);
                bothCtrl.controls[key].updateValueAndValidity();
            });
        }

// BOTH
        if (contactMethodType === this.CONTACT_METHOD_TYPE.BOTH) {

          
            // remove all validators from bank fields
            Object.keys(emailCtrl.controls).forEach(key => {
                emailCtrl.controls[key].setValidators(null);
                emailCtrl.controls[key].updateValueAndValidity();
            });

             Object.keys(phoneCtrl.controls).forEach(key => {
                phoneCtrl.controls[key].setValidators(null);
                phoneCtrl.controls[key].updateValueAndValidity();
            });

            // apply validators to each card fields, retrieve validators from card model
            Object.keys(bothCtrl.controls).forEach(key => {
                bothCtrl.controls[key].setValidators(this.initEmailPhoneMethodModel()[key][1]);
                bothCtrl.controls[key].updateValueAndValidity();
            });

        }
    });
}





initEmailMethodModel(){
   const model = {
        'email': [null, Validators.required],
      };
      
      return model;
   
}
initPhoneMethodModel(){
   const model = {
        'phone': [null, Validators.required],
      };
      
      return model;
 
}
initEmailPhoneMethodModel(){
 
   const model = {
        'emailBoth': [null, Validators.required],
        'phoneBoth': [null, Validators.required],
      };
      
      return model;
 
}

  onSubmit(model:any,isvalid: boolean){
      this.submitted = true;
      if(isvalid)
      {
         model.DateOfBirth=this.activatedRoute.snapshot.params['dob'];
         model.question1=this.activatedRoute.snapshot.params['res'];
         model.question2=this.activatedRoute.snapshot.params['ins'];
         if(this.selectedOption==3)
         {
             model.email = model.contactMethod.Both.emailBoth;
             model.phone = model.contactMethod.Both.phoneBoth;
         }

         
          console.log(model);
          this.patientService.addPatient(model);
          this._router.navigate(['thankyou']);

          
      }
    }


        EmailClicked(){
      const ctrl: FormControl = (<any>this.signUpDetailsForm).controls.contactMethod.controls.type;
      ctrl.setValue("Email");
      this.selectedOption=1;
    }

PhoneClicked(){
      const ctrl: FormControl = (<any>this.signUpDetailsForm).controls.contactMethod.controls.type;
      ctrl.setValue("Phone");
      this.selectedOption=2;
    }

BothClicked(){
      const ctrl: FormControl = (<any>this.signUpDetailsForm).controls.contactMethod.controls.type;
      ctrl.setValue("Both");
      this.selectedOption=3;
    }
	
	
	 

}