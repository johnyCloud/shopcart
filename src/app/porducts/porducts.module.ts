import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})
export class PorductsModule { }
