import { Component } from '@angular/core';
import { GridOptions } from "ag-grid";
import { PatientDataService } from '../../Services/patient-data.service';
import { NumericEditorComponent } from './NumericEditorComponent.component';
import { EmailEditorComponent } from './EmailEditorComponent.component';

@Component({
  templateUrl: './patientlist.component.html',
  styles: [require('../../../assets/css/app.component.css')],
  providers:[PatientDataService]
})

export class PatientListComponent {
  private gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];
  constructor(private _patientDataService: PatientDataService) {
    this.gridOptions = <GridOptions>{};
    this.createRowData();
    this.createColumnDefs();


  }

  private createColumnDefs() {
    this.columnDefs = [
      {
        headerName: "FirstName",
        field: "firstname",
      
      },
      {
        headerName: "LastName",
        field: "firstname",
       
      },
      {
        headerName: "DateOfBirth",
        field: "dateofbirth",
        
      },
      {
        headerName: "Email",
        field: "email",
         cellEditorFramework: EmailEditorComponent,
         editable: true,
      },
      {
        headerName: "Phone",
        field: "phone",
       // cellEditorFramework: NumericEditorComponent,
       // editable: true,
        
      },
      {
        headerName: "Q1",
        field: "q1",
        
      },
      {
        headerName: "Q2",
        field: "q2",
        
      },

    ];
  }

  private createRowData() {
    var rowData: any[] = [];
    this._patientDataService.getAllPatients().subscribe((data)=>{
   //data is your patient list

      console.log(data);

      for (var i = 0; i < data.length; i++) {
      rowData.push({

        firstname: data[i].firstname, lastname: data[i].lastname, dateofbirth: data[i].dateofbirth, email: data[i].email, 
        phone: data[i].phone, q1: data[i].q1, q2: data[i].q2

      });
    }
      
    this.rowData=rowData;
    })
  
  }

}