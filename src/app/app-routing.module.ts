import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AdherantsComponent } from './adherants/adherants.component';
import { AproposComponent } from './apropos/apropos.component';
import { AjoutlivreComponent } from './ajoutlivre/ajoutlivre.component';



const routes: Routes = [

  {path: 'livre' , component: LivresComponent},
  {path: 'adherant' , component: AdherantsComponent},
  {path:'apropos', component:AproposComponent},
  {path:'', component:AproposComponent},
  {path:'ajoutcat', component:AjoutlivreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
