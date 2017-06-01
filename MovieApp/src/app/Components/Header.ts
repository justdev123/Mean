import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Header',
    templateUrl: './Header.html',
    styles: [require('../../assets/css/styles.css')]
  
})
export class HeaderComponent implements OnInit{
username: string ='';
    ngOnInit(){
        if(localStorage.getItem('username')==null){
            this.username = '';
        }else{

        
        this.username = 'Welcome  ' + localStorage.getItem('username');
        }
    }

}