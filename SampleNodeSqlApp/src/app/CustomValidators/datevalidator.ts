import { FormControl } from '@angular/forms';
export class DateValidator{
    static validate(control: FormControl){
            if(control.value==null)
            return null;

            console.log(control.value);
            if (!control.value.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {

            return { 'invalidDateFormat': true };
        }
    }
}