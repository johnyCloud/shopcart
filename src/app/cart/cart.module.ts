import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CartComponent,
    CheckoutComponent,
    FormComponent
  ]
})
export class CartModule { }
