import { FormsModule } from '@angular/forms';
import {MenuModule,SlideMenuModule,MenuItem} from 'primeng/primeng';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
     selector: 'Menu',
    templateUrl: './Menu.html',
    styles: [require('../../assets/css/Menu.css')],
   encapsulation: ViewEncapsulation.None

})
export class MenuComponent implements OnInit{
    private items: MenuItem[];

    ngOnInit(){
        this.items = [
            {
                //label: 'File',
                //icon: 'fa-file-o',
                items: [{
                        label: 'Home', 
                       // icon: 'fa-plus',
                        
                    },
                ]
            },
            {
               // label: 'Edit',
               // icon: 'fa-edit',
                items: [
                    {label: 'Customers' },//, icon: 'fa-mail-forward'},
                    {label: 'Register Customer'},//, icon: 'fa-mail-reply'}
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
                    {label: 'Login' },//, icon: 'fa-mail-forward'},
              
                ]
            },
      
        
        ];
    }
}