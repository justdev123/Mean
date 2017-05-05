import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppComponent } from './app.component';
import { MovieKioskComponent } from './Components/Movies/MovieKiosk';
import { MenuComponent } from './Components/Menu';
import { ContextMenuModule, MenuModule, MenuItem } from 'primeng/primeng';
import {DataGridModule,PanelModule,ButtonModule,ChartModule , RatingModule} from 'primeng/primeng';
import { HeaderComponent } from './Components/Header';
@NgModule({
  declarations: [
  //  AppComponent,
    MovieKioskComponent,
    MenuComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MenuModule,
    DataGridModule,
    PanelModule ,
    ButtonModule ,
    ChartModule ,
    RatingModule
  ],
  providers: [],
  bootstrap: [MovieKioskComponent]
})
export class AppModule { }
