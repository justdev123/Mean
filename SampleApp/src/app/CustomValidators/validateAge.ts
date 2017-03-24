import { Directive, forwardRef, Attribute  } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';
import { DatePipe  } from '@angular/common';


function validate(c:FormControl) : { [key: string]: any }{



console.log('test');
console.log(c.value);


      var validateAge =false;
      
      var day = c.value.getDate();

      var month = c.value.getMonth();

      var year = c.value.getFullYear();

      var composedDate = new Date(year, month, day);
      
     console.log('inside');
     var minYear= c.value.setFullYear(c.value.getFullYear()-18);
     console.log('Min Year='+minYear);
      if(minYear>=18)
      {
        validateAge = true;
      }
      
      return null;

}

export class AgeValidator  {
      constructor() {}
      
      static Validate(c:FormControl)
      {
        if(c.value==null)
        {
          return null;
        }
          return validate(c);
      }

}