import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { DetailsComponent } from './core/details/details.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cart", component: CartComponent},
  {path:"item/:id", component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
