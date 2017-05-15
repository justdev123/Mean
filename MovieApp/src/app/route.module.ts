import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/Login';
import { MovieKioskComponent } from './Components/Movies/MovieKiosk';
import { HeaderComponent } from './Components/Header';
import { MenuComponent } from './Components/Menu';
import { RegisterComponent } from './Components/Login/Register';
var routes : Routes =[
    {path:'Login',component:LoginComponent},
    {path:'Home',component:MovieKioskComponent},
    {path:'Header',component:HeaderComponent},
    {path:'Menu',component:MenuComponent},
    {path:'Register',component:RegisterComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }