import { FormsModule } from '@angular/forms';
import {MenuModule,SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../Services/auth-data.service';
import { Router } from '@angular/router';

@Component({
     selector: 'Menu',
     templateUrl: './Menu.html',
     styles: [require('../../assets/css/Menu.css')],
     encapsulation: ViewEncapsulation.None,
     providers:[AuthenticationService]

})
export class MenuComponent implements OnInit{
    private items: MenuItem[];
    token : string ='0';
    isLoggedOut : boolean = true;
    constructor(private _authService : AuthenticationService,private _router: Router){
     
    }
    ngOnInit(){
         
           if(localStorage.getItem('token')!=null)
           {
                this.isLoggedOut=true;
           }else{
              
                this.isLoggedOut=false;
           }
            console.log(this.isLoggedOut);
        this.items = [
            {
                //label: 'File',
                //icon: 'fa-file-o',
                items: [{
                        label: 'Home', routerLink:['/Home']
                       // icon: 'fa-plus',
                        
                    },
                ]
            },
            {
               // label: 'Edit',
               // icon: 'fa-edit',
                items: [
                    {label: 'Customers' ,routerLink: ['/Customer']},//, icon: 'fa-mail-forward'},
                    {label: 'Register Customer',routerLink: ['/RegisterCustomer']},//, icon: 'fa-mail-reply'}
                ]
            },
                {
               // label: 'Edit',
               // icon: 'fa-edit',
                items: [
                    {label: 'Movies' },//, icon: 'fa-mail-forward'},
                    {label: 'Add Movie'},//, icon: 'fa-mail-reply'}
                ]
            },
              {
               // label: 'Edit',
               // icon: 'fa-edit',
                items: [
                    {label: 'Rental History' },//, icon: 'fa-mail-forward'},
                    
                ]
            },
              {
               // label: 'Edit',
               // icon: 'fa-edit',
                items: [
                    {label: 'Login',  disabled:this.isLoggedOut ? true : false ,routerLink: ['/Login']},//, icon: 'fa-mail-forward'},
              
                ],
               
            },
      
        
        ];
    }

    logout(){
        console.log('logged out');
        this._authService.logout();

         this._router.navigate(['Login']);
    }
}