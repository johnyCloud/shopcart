import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import { CartService } from '../service/cart.service';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartList?: Product[];
  totals?: Totals[];
  ngOnInit(): void {
    this.cartList = this.cartService.getItems();
    this.totals = this.cartService.getTotals();
    console.log(this.cartList, this.totals);
    
  }

  plus(id : number){this.cartService.plus(id)}
  minus(id : number){this.cartService.minus(id)}
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
  }
}
