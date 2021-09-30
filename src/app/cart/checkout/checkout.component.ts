import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from 'src/app/porducts/models/product';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) {}

  // cartList?: Product[];
  // totals?: Totals[];
  // checkFlag = 1;
  ngOnInit(): void {
    // this.cartList = this.cartService.getItems();
    // this.totals = this.cartService.getTotals();
    // console.log(this.cartList, this.totals);
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  plus(id: any) {
    this.cartService.plus(id);
  }
  minus(product: any){
    this.cartService.minus(product);
  }

  // getTotalById(id: number) {
  //   return this.totals?.find((elemnt) => elemnt.id === id)?.total;
  // }

  // getTotalPrice() {
  //   let price = 0;
  //   this.totals?.forEach((item) => {
  //     let pr = this.cartList?.find((el) => el.id === item.id)?.price;
  //     price += pr! * item.total;
  //   });
  //   return price;
  // }

  // remove(id: number) {
  //   this.cartService.remove(id);
  //   this.cartList = this.cartService.getItems();
  //   this.totals = this.cartService.getTotals();
  // }
}
