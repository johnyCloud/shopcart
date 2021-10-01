import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { CartService } from '../service/cart.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(
    private cartService: CartService,
    private localStorge: LocalStorageService
  ) {}

  // cartList?: Product[];
  // totals?: Totals[];
  // cartFlag = 1;
  key: string = 'CART-LIST';

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    if (this.localStorge.isLocalStorageSupported) {
      let localList = this.localStorge.get(this.key);
      console.log(localList);
      if (localList) {
        this.cartService.addItems(localList);
      }
    }
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    this.localStorge.set(this.key, this.products)
  }
  emptycart(){
    this.cartService.removeAllCart();
    this.localStorge.remove(this.key);
  }

  plus(id: any) {
    this.cartService.plus(id);
    this.localStorge.set(this.key, this.products)
  }
  minus(product: any){
    this.cartService.minus(product);
    this.localStorge.set(this.key, this.products)
  }
  checkout(items: any){
    console.log(this.products);
    
    this.localStorge.set(this.key,items);
  }
}
