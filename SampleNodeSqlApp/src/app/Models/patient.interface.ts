export class Patient {

    _id : AAGUID;
    firstname: string ;

    lastname: string ;

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
    dateofbirth: string;
    
    q1: string ;

    q2: string;


    question3: string;

    question4: string;


    question5: string;

    question6: string;

constructor(values: Object={}){
    Object.assign(this,values);
}

}
