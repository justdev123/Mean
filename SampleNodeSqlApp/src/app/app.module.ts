import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { RoutingModule } from './route.module';


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
      HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
