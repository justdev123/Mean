import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/Card/signup.component';
import { ActivationComponent } from './Components/Activation/activation.component';
import { InsurenceYesComponent } from './Components/Card/insuranceyes.component';
import { ChoiceComponent } from './choice.component';
import { AgeValidator } from './CustomValidators/validateAge';
import { ThankYouComponent } from './Components/Card/thankyou.component';
import { CustomerComponent } from './customer.component';
import { TestComponent } from './test.component';
import { HeaderComponent } from './Header.component';
import { RoutingModule } from './route.module';
import { PatientListComponent } from './Components/Admin/patientlist.component';
import {AgGridModule} from "ag-grid-angular/main";


@NgModule({
  declarations: [
      AppComponent,
      SignUpComponent,
      ActivationComponent,
      InsurenceYesComponent,
      ChoiceComponent,
      ThankYouComponent,
      CustomerComponent,
      TestComponent,
      HeaderComponent,
      PatientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
    ReactiveFormsModule,
    RoutingModule,
    AgGridModule.withComponents([PatientListComponent])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
