import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({

  templateUrl: './test.component.html',
})


export class TestComponent {
  public selectedOption :number =1;
constructor(private _router:Router){}


}