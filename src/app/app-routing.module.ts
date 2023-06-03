import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { NewadComponent } from './newad/newad.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"offers", component:OffersComponent},
  {path:"newad", component:NewadComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
