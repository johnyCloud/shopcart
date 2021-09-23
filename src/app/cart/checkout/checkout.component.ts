import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from 'src/app/porducts/models/product';
import { Totals } from '../service/totals';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartList?: Product[];
  totals?: Totals[];
  ngOnInit(): void {
    this.cartList = this.cartService.getItems();
    this.totals = this.cartService.getTotals();
    console.log(this.cartList, this.totals);
    
  }

  getTotalById(id : number ){
    return this.totals?.find(elemnt => elemnt.id === id)?.total;
  }
  
  remove(id : number){
    this.cartService.remove(id);
    this.cartList = this.cartService.getItems();
    this.totals = this.cartService.getTotals();
  }

}
