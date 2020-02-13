import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { AproposComponent } from './apropos/apropos.component';
import { LivresComponent } from './livres/livres.component';
import { AdherantsComponent } from './adherants/adherants.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyfooterComponent,
    AproposComponent,
    LivresComponent,
    AdherantsComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
