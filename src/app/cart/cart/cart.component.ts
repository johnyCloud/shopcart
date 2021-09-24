import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { CartService } from '../service/cart.service';
import { LocalStorageService } from '../service/local-storage.service';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private localStorge: LocalStorageService
    ) { }

  cartList?: Product[];
  totals?: Totals[];
  key:string = "CART-LIST"

  ngOnInit(): void {
    if(this.localStorge.isLocalStorageSupported){
      let localList = this.localStorge.get(this.key);
      if (localList?.cartList.length){
        this.cartService.addItems(<Product[]>localList.cartList);
        this.cartService.addTotals(localList.totals)
      }
    }
    this.cartList = this.cartService.getItems();
    this.totals = this.cartService.getTotals();
  }

  plus(id : number){this.totals = this.cartService.plus(id)}
  minus(id : number){
    this.totals = this.cartService.minus(id)
    this.cartList = this.cartService.getItems();
  }

  getTotalById(id : number ){
    return this.totals?.find(elemnt => elemnt.id === id)?.total;
  }

  getTotalPrice(){
    let price = 0;
    this.totals?.forEach(item=>{
      let pr = this.cartList?.find(el => el.id === item.id)?.price ;
      price += pr! * item.total
    })
    return price;
  }

  clear(){
    this.cartList = this.cartService.clearCart();
    this.totals = [];
    this.localStorge.remove(this.key);
  }

  checkout(){
    this.localStorge.set(this.key, {cartList : this.cartList, totals: this.totals});
  }
}
