import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/Login';
import { MovieKioskComponent } from './Components/Movies/MovieKiosk';
import { HeaderComponent } from './Components/Header';
import { MenuComponent } from './Components/Menu';
import { RegisterComponent } from './Components/Login/Register';
import { RegisterCustomerComponent } from './Components/Customers/RegisterCustomer';
import { LoggedUserGuard } from './Guard/LoggedUserGuard';
import { CustomerComponent } from './Components/Customers/Customer';


var routes : Routes =[
    {path:'Login',component:LoginComponent},
    {path:'Home',component:MovieKioskComponent},
    {path:'Header',component:HeaderComponent},
    {path:'Menu',component:MenuComponent},
    {path:'Register',component:RegisterComponent},
    {path:'RegisterCustomer',component:RegisterCustomerComponent,canActivate:[LoggedUserGuard]},
     {path:'Customer',component:CustomerComponent,canActivate:[LoggedUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }