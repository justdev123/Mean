import { Component } from '@angular/core';
import { GridOptions } from "ag-grid";
import { PatientDataService } from '../../Services/patient-data.service';
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
        width: 100
      },
      {
        headerName: "LastName",
        field: "lastname",
        width: 100
      },
      {
        headerName: "DateOfBirth",
        field: "dateofbirth",
        width: 100
      },
      {
        headerName: "Email",
        field: "email",
        width: 100
      },
      {
        headerName: "Phone",
        field: "phone",
        width: 100
      },
      {
        headerName: "Q1",
        field: "q1",
        width: 100
      },
      {
        headerName: "Q2",
        field: "q2",
        width: 100
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

        firstname: data[i].firstName, lastname: data[i].lastName, dateofbirth: data[i].DateOfBirth, email: data[i].email, 
        phone: data[i].phone, q1: data[i].question1, q2: data[i].question2

      });
    }
      
    this.rowData=rowData;
    })
  
  }

}