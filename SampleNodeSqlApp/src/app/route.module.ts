import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/Card/signup.component';
import { ActivationComponent } from './Components/Activation/activation.component';
import { InsurenceYesComponent } from './Components/Card/insuranceyes.component';
import { ChoiceComponent } from './choice.component';
import { ThankYouComponent } from './Components/Card/thankyou.component';

import { HeaderComponent } from './Header.component';
//import { InsuranceComponent } from './insurance.component';
import { PatientListComponent } from './Components/Admin/patientlist.component';
import { PatientListPrimeComponent } from './Components/Admin/patientListPrime.component';
var routes : Routes =[
  {path:'cardsignup',component:SignUpComponent},
  {path:'activation',component:ActivationComponent},
  {path:'insuranceyes',component:InsurenceYesComponent},
  {path:'choice',component:ChoiceComponent},
  {path:'thankyou',component:ThankYouComponent},
  {path:'header',component:HeaderComponent,outlet:'header'},
  {path:'patientlist',component:PatientListComponent},
  {path:'patientlistprime',component:PatientListPrimeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }