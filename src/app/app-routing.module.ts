import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { DetailsComponent } from './core/details/details.component';
import { HomeComponent } from './core/home/home.component';
import { MainComponent } from './core/main/main/main.component';

const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"list", component: HomeComponent},
  {path:"cart", component: CartComponent},
  {path:"list/item/:id", component: DetailsComponent},
  {path:"cart/checkout", component: CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
