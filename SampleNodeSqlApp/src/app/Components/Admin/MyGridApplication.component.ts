import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import { RedComponentComponent } from './RedComponent.component';

@Component({
    templateUrl: './MyGridApplication.component.html'
})
export class MyGridApplicationComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = {};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 'var', value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
}