import {Component, ViewContainerRef, ViewChild, AfterViewInit} from '@angular/core';

import {ICellEditorAngularComp} from 'ag-grid-angular/main';

@Component({
    selector: 'email-cell',
    template: `<input #input (keydown)="onKeyDown($event)" [(ngModel)]="value">`
})
export class EmailEditorComponent implements ICellEditorAngularComp, AfterViewInit {
    private params: any;
    public value: string ="";
    private cancelBeforeStart: boolean = true;

    @ViewChild('input', {read: ViewContainerRef}) public input;


    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;

    }

    getValue(): any {
        return this.value;
    }

    isCancelBeforeStart(): boolean {
        return this.cancelBeforeStart;
    }

    // will reject the number if it greater than 1,000,000
    // not very practical, but demonstrates the method.
    //isCancelAfterEnd(): boolean {
      //  return this.value > 1000000;
    //};

    onKeyDown(event): void {
        if (!this.isKeyPressedNumeric(event)) {
            console.log('here');
           // if (event.preventDefault) event.preventDefault();
        }

         console.log('out here');
    }

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        this.input.element.nativeElement.focus();
    }

    private getCharCodeFromEvent(event): any {
        event = event || window.event;
        return (typeof event.which == "undefined") ? event.keyCode : event.which;
    }

    private isCharNumeric(charStr): boolean {
        return !!/\d/.test(charStr);
    }

    private isKeyPressedNumeric(event): boolean {
        var charCode = this.getCharCodeFromEvent(event);
        var charStr = String.fromCharCode(charCode);
        return this.isCharNumeric(charStr);
    }
}