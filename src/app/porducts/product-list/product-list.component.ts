import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProductList();
    console.log(this.products);
    
  }

  getProductList(){
    this.api.getProducts().subscribe((res)=>{
      this.products = [...res];
    })
  }

}
