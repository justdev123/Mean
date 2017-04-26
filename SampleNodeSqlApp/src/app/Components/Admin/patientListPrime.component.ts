
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { PatientDataService } from '../../Services/patient-data.service';
import { Patient } from '../../Models/patient.interface';
import {DataTableModule,Column,SharedModule,DialogModule} from 'primeng/primeng';
import { ActivatedRoute, ROUTER_CONFIGURATION, Router } from '@angular/router';
@Component({
  templateUrl: './patientListPrime.component.html',
  styles: [require('../../../assets/css/app.component.css')],

  providers:[PatientDataService],
})

export class PatientListPrimeComponent implements OnInit {
  
    maxDate: Date;
    displayDialog: boolean;
    patients : Patient[];
    selectedPatient : Patient;
    errorMsg: string;
    patient : Patient;
    public edited = false;
    public responsecode= '';
    public responsedescription = '';
    constructor(private  _patientDataService: PatientDataService,private _router : Router){
    
    }

    ngOnInit(): void {
        var rowData: any[] = [];
        this._patientDataService.getAllPatients().subscribe((data)=> {
         
         //console.log(data);
          for (var i = 0; i < data.length; i++) {
                rowData.push({
                   _id:data[i]._id, firstname: data[i].firstname, lastname: data[i].lastname, dateofbirth: data[i].dateofbirth, email: data[i].email, 
                    phone: data[i].phone, q1: data[i].q1, q2: data[i].q2

                });
       
            }
        });
        this.patients=rowData;
        console.log('patients= '+ this.patients);

    }

    onRowSelect(event) {
       // this.newCar = false;
        this.patient = this.clonePatient(event.data);
     //   console.log(this.patient);
        this.getPatientById(this.patient._id);
       
        this.displayDialog = true;
    }


    save()
    {
        this.patient.dateofbirth = new Date(this.patient.dateofbirth).toLocaleDateString();
        this._patientDataService.updateById(this.patient).subscribe(res => {

            if(res._responseModel.StatusCode=='1')
            {
                  this._patientDataService.getPatientById(this.patient._id).subscribe((data)=> {
                    
                     var index= this.patients.indexOf(this.patients.find(x=>x._id == this.patient._id));
               
                    this.patients[index] =  data;
                    this.setMessageBox(res._responseModel.StatusCode,res._responseModel.StatusDescription);
                    this.ShowMessageBox();
                  });
            }

        }); 
        this.displayDialog = false;
    }

    delete()
    {
        this._patientDataService.delete(this.patient).subscribe(res => {

            if(res._responseModel.StatusCode=='1')
            {
                var index= this.patients.indexOf(this.patients.find(x=>x._id == this.patient._id));
               
                this.patients.splice(index,1);
                this.setMessageBox(res._responseModel.StatusCode,res._responseModel.StatusDescription);
                this.ShowMessageBox();
            }
        }); 
         this.displayDialog = false;
    }

    redirectToAddView()
    {
        this._router.navigate(['cardsignup']);
    }

    clonePatient(c: Patient): Patient {
        let pat = new Patient();
        for(let prop in c) {
            pat[prop] = c[prop];
        }
        return pat;
    }

    checkerrorprop(c:any){
         for(let prop in c) {
           console.log(prop);
           console.log(c[prop]);
        }
    }

    private getPatientById(id: any){
        this._patientDataService.getPatientById(this.patient._id).subscribe((data)=> {
       // console.log(data);
       
        });
    }

    private setMessageBox(responsecode,responsedescription)
    {
        this.responsecode=responsecode;
        this.responsedescription=responsedescription;
    }

    private ShowMessageBox(){
    this.edited = true;
    setTimeout(function() {
            this.edited = false;
            console.log(this.edited);
            }.bind(this), 3000);
    }
}