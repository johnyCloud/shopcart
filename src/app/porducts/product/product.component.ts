import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Product } from 'src/app/porducts/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
