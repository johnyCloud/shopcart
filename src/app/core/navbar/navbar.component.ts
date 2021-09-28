import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Totals } from 'src/app/cart/service/totals';
import { Product } from 'src/app/porducts/models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  


  constructor(private cartService: CartService) { }

  totals?: Totals[];

  ngOnInit(): void {
    
    this.totals = this.cartService.getTotals();
  }

  getTotalNr() {
    return  this.cartService.getTotalNr();
  }

}
