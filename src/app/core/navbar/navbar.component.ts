import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { LocalStorageService } from 'src/app/cart/service/local-storage.service';
import { Totals } from 'src/app/cart/service/totals';
import { Product } from 'src/app/porducts/models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])
  ],
})
export class NavbarComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  public status : number = 1;
  public products : any ;
  public grandTotal : any ;
  constructor(
    private cartService : CartService,
    
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
        this.totalItem = res.length;
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
    //this.searchTerm = ""
  }

  in(){
    this.status = 0;
  }

  out(){
    this.status = 1;
  }


}
