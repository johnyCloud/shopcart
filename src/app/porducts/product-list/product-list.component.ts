import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Product } from 'src/app/porducts/models/product';
import { ApiService } from 'src/app/shared/services/api.service';

import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(500, style({opacity: 0}))
      ])
    ])
  ],
})
export class ProductListComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  priceRange: number = 1000;
  ratingRange: number = 5;
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((item:any)=>{
      if(item.category == category || category==''){
        return item;
      }
    })
  }

  priceFilter(price : any){
    //console.log(typeof price);
    this.filterCategory = this.productList.filter((item: any)=>{
      let iprice = item.price
     if ( typeof iprice === 'string')  iprice = parseFloat(iprice);
     if (iprice < parseInt(price)) return item;
    })
  }
  ratingFilter(rating : any){
    //console.log(rating);
    this.filterCategory = this.productList.filter((item: any)=>{
      let irate = item.rating.rate
     if ( typeof irate === 'string')  irate = parseFloat(irate);
     if (irate < parseInt(rating)) return item;
    })
  }
}
