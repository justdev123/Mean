import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './heroes/Card/signup.component';
import { ActivationComponent } from './heroes/Activation/activation.component';
import { InsurenceYesComponent } from './heroes/Card/insuranceyes.component';
import { ChoiceComponent } from './choice.component';
import { AgeValidator } from './CustomValidators/validateAge';
import { ThankYouComponent } from './heroes/Card/thankyou.component';
import { CustomerComponent } from './customer.component';
import { TestComponent } from './test.component';
import { HeaderComponent } from './Header.component';
//import { InsuranceComponent } from './insurance.component';
var routes : Routes =[
  {path:'cardsignup',component:SignUpComponent},
  {path:'activation',component:ActivationComponent},
  {path:'insuranceyes',component:InsurenceYesComponent},
  {path:'choice',component:ChoiceComponent},
  {path:'thankyou',component:ThankYouComponent},
  {path:'customer',component:CustomerComponent},
  {path:'header',component:HeaderComponent,outlet:'header'},
  {path:'test',component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }