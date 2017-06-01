import { FormGroup, FormBuilder, Validators, Validator, FormControl } from '@angular/forms';
import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { CustomerDataService } from '../../Services/customer-data.service';
import { Customer } from '../../Models/Customer';
import { DataGridModule } from 'primeng/primeng';
import { PanelModule, ButtonModule, ChartModule } from 'primeng/primeng';
@Component({
    templateUrl: './Customer.html',
    styles: [require('../../../assets/css/Customer.css')],
    providers: [CustomerDataService],
       encapsulation: ViewEncapsulation.None
})

export class CustomerComponent implements OnInit{
     customers: Customer[];
    constructor(private _customerDataService:CustomerDataService){

    }
    ngOnInit(){
         this._customerDataService.getAllCustomers().subscribe((res) => {
      if (res['StatusCode'] == '1') {
        this.customers = res['RecordSet'].recordset;

      }
    });
    }

}