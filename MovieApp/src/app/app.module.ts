import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppComponent } from './app.component';
import { MovieKioskComponent } from './Components/Movies/MovieKiosk';
import { MenuComponent } from './Components/Menu';
import { ContextMenuModule, MenuModule, MenuItem } from 'primeng/primeng';
import {DataGridModule,PanelModule,ButtonModule,ChartModule , RatingModule , CalendarModule} from 'primeng/primeng';
import { HeaderComponent } from './Components/Header';
import { RoutingModule } from './route.module';
import { LoginComponent } from './Components/Login/Login';
import { AppComponent } from './Components/app.component';
import { RegisterComponent } from './Components/Login/Register';
//import { EqualValidator } from './Directives/password-validator.directive';
import { CustomFormsModule } from 'ng2-validation';
import { RegisterCustomerComponent } from './Components/Customers/RegisterCustomer';
import { LoggedUserGuard } from './Guard/LoggedUserGuard';
import { CustomerComponent } from './Components/Customers/Customer';


@NgModule({
  declarations: [
   AppComponent,
    MovieKioskComponent,
    MenuComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterCustomerComponent,
    CustomerComponent

//directives
   // EqualValidator
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule,
    MenuModule,
    DataGridModule,
    PanelModule ,
    ButtonModule ,
    ChartModule ,
    RatingModule,
    CalendarModule
  ],
  providers: [
    LoggedUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
