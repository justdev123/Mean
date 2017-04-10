import { Component } from '@angular/core';
import {GridOptions} from "ag-grid";
import { RedComponentComponent } from './RedComponent.component';
@Component({
  templateUrl: './patientlist.component.html',
})

export class PatientListComponent {
  private gridOptions: GridOptions;

  constructor(){
    this.gridOptions ={};
    this.gridOptions.columnDefs= [
      {
        headerName:"FirstName",
        field:"firstname",
        width:100
      },
      {
        headerName:"LastName",
        field:"lastname",
        width:100
      },

    ];
    this.gridOptions.rowData=[
      {firstname:'Var',lastname:'kha'},
      {firstname:'Var',lastname:'kha'},
      {firstname:'Var',lastname:'kha'}
    ]
  }
}