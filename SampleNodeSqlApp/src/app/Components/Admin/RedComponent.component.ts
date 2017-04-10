// src/app/red-component/red-component.component.ts
import {Component} from "@angular/core";

@Component({
     selector: 'app-red-component',
    templateUrl: './redcomponent.component.html',
    styles:[`<span style="color: red">{{ params.value }}</span>`]

})


export class RedComponentComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}

