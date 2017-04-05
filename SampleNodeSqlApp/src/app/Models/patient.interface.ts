export class Patient {
    firstName: string ;

    lastName: string ;

   contactMethod : {
       type:string;
       Email: {
            email: string ;
       },
       Phone: {
            phone: string ;
       },
        Both: {
            emailBoth: string ;
            phoneBoth: string ;
       }


   }
    
 email: string ;
   phone: string ;
    DateOfBirth: string;
    
    question1: string ;

    question2: string;


    question3: string;

    question4: string;


    question5: string;

    question6: string;

constructor(values: Object={}){
    Object.assign(this,values);
}

}
