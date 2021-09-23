import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { ApiService } from 'src/app/shared/services/api.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]= this.productsService.getItems();;

  constructor(
    //private api: ApiService,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    //this.getProductList();
    //this.products 
    
  }

  

}