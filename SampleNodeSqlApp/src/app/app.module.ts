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

import { ThankYouComponent } from './Components/Card/thankyou.component';
import { HeaderComponent } from './Header.component';
import { RoutingModule } from './route.module';
import { PatientListComponent } from './Components/Admin/patientlist.component';
import {AgGridModule} from "ag-grid-angular/main";
import { NumericEditorComponent } from './Components/Admin/NumericEditorComponent.component';
import { EmailEditorComponent } from './Components/Admin/EmailEditorComponent.component';
import { PatientListPrimeComponent } from './Components/Admin/patientListPrime.component';
import { DataTableModule,CalendarModule } from 'primeng/primeng';
import { UnderlineDirective } from './CustomDirectives/underline.directive';




@NgModule({
  declarations: [
      AppComponent,
      SignUpComponent,
      ActivationComponent,
      InsurenceYesComponent,
      ChoiceComponent,
      ThankYouComponent,
      HeaderComponent,
      PatientListComponent,
      NumericEditorComponent,
      EmailEditorComponent,
      PatientListPrimeComponent,
      UnderlineDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
    ReactiveFormsModule,
    RoutingModule,
    AgGridModule.withComponents([PatientListComponent,NumericEditorComponent,EmailEditorComponent]),
    DataTableModule,
    CalendarModule
  ],
  exports:[
    UnderlineDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
