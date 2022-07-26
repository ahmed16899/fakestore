import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'prodict/:id',component:ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
