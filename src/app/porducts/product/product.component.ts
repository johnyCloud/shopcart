import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { LocalStorageService } from 'src/app/cart/service/local-storage.service';
import { Product } from 'src/app/porducts/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: any;

  key: string = 'CART-LIST';
  constructor(private cartService: CartService, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.localStorage.set(this.key, this.cartService.cartItemList);
  }

}
