import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products: Product[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.products);
    
  }

  getProductList(){
    this.api.getProducts().subscribe((res)=>{
      this.products = __values(res);
    })
  }

}
