import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
   selector: 'app-root',
  templateUrl: './app.component.html',
   styles: [require('../assets/css/app.component.css')]
})


export class AppComponent implements OnInit {

constructor(private _router:Router){}

ngOnInit():any{
  this._router.navigate(['patientlist']);
}
  


}
