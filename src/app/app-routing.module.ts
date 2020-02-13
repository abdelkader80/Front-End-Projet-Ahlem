import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AdherantsComponent } from './adherants/adherants.component';
import { AproposComponent } from './apropos/apropos.component';



const routes: Routes = [
  
  {path: 'livre' , component: LivresComponent},
  {path: 'adherant' , component: AdherantsComponent},
  {path:'apropos', component:AproposComponent},
  {path:'', component:AproposComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
