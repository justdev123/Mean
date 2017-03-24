import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'customer.component.html',
})
export class CustomerComponent implements OnInit {
    public myForm: FormGroup; // our model driven form
    
    // standing data
    public PAYMENT_METHOD_TYPE = {
      BANK: 'bank',
      CARD: 'card'
    };

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
        // we will initialize our form model here
        this.myForm = this._fb.group({
            name: ['Jane Doe'],
            paymentMethod: this.initPaymentMethodFormGroup()
        });
        
        this.subscribePaymentTypeChanges();
        
        this.setPaymentMethodType(this.PAYMENT_METHOD_TYPE.BANK);
    }

    initPaymentMethodFormGroup() {
      // initialize payment method form group
      const group = this._fb.group({
            type: [''],
            card: this._fb.group(this.initPaymentMethodCardModel()),
            bank: this._fb.group(this.initPaymentMethodBankModel()),
        });
      
      return group;
    }
    
    subscribePaymentTypeChanges() {
      
      // controls
      const pmCtrl = (<any>this.myForm).controls.paymentMethod;
      const bankCtrl = pmCtrl.controls.bank;
      const cardCtrl = pmCtrl.controls.card;
      
      // initialize value changes stream
      const changes$ = pmCtrl.controls.type.valueChanges;
      
      // subscribe to the stream
      changes$.subscribe(paymentMethodType => {
        if (paymentMethodType === this.PAYMENT_METHOD_TYPE.BANK) {
          Object.keys(bankCtrl.controls).forEach(key => {
            bankCtrl.controls[key].setValidators(this.initPaymentMethodBankModel()[key][1]);
            bankCtrl.controls[key].updateValueAndValidity();
          });
          
          Object.keys(cardCtrl.controls).forEach(key => {
            cardCtrl.controls[key].setValidators(null);
            cardCtrl.controls[key].updateValueAndValidity();
          });
        }
        
        if (paymentMethodType === this.PAYMENT_METHOD_TYPE.CARD) {
          Object.keys(bankCtrl.controls).forEach(key => {
            bankCtrl.controls[key].setValidators(null);
            bankCtrl.controls[key].updateValueAndValidity();
          });
          
          Object.keys(cardCtrl.controls).forEach(key => {
            cardCtrl.controls[key].setValidators(this.initPaymentMethodCardModel()[key][1]);
            cardCtrl.controls[key].updateValueAndValidity();
          });
        }
        
      });
    }
    
    initPaymentMethodCardModel() {
      // you get valid testing credit card from http://www.getcreditcardnumbers.com/
      const cardNoRegex = `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$`;
      const expiryRegex = `^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$`;
      
      
      // initialize card model
      const model = {
        cardNo: ['', [Validators.required, Validators.pattern(cardNoRegex)]],
        cardHolder: ['', Validators.required],
        expiry: ['', [Validators.required, Validators.pattern(expiryRegex)]]
      };
      
      return model;
    }
    
    initPaymentMethodBankModel() {
      // initialize bank model
      const model = {
        accountNo: ['', Validators.required],
        accountHolder: ['', Validators.required],
        routingNo: ['', Validators.required]
      };
      
      return model;
    }
    
    setPaymentMethodType(type: string) {
      // update payment method type value
      const ctrl: FormControl = (<any>this.myForm).controls.paymentMethod.controls.type;
      ctrl.setValue(type);
    }

    save(model: Customer, isValid: boolean) {
        // call API to save
        // ...
        console.log(model, isValid);
    }
}