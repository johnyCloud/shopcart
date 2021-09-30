import { Component, OnInit } from '@angular/core';
import { animate, style, group, state, transition, trigger,  } from '@angular/animations';
import { CartService } from 'src/app/cart/service/cart.service';
import { LocalStorageService } from 'src/app/cart/service/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // animations: [
    
  //   trigger('randomPos', [
  //     state('hover', style({ 
  //       //left: Math.random()*200,
  //       top: Math.random()*600})),
  //     // state('not', style({ 
  //     //   background: 'blue',
  //     //   left: Math.random()*200,
  //     //   top: Math.random()*200
  //     //   })),
  //     transition('*=>hover',[
  //       animate('250ms ease-out')
  //     ]),
  //     transition('hover=>*',[
  //       animate('250ms ease-out')
  //     ]),
      
  //   ]),
  // ]
})


export class MainComponent implements OnInit {
  // hover = false;
  constructor(
    private cartService: CartService,
    private localStorge: LocalStorageService,
    ) {}

  // get stateName() {
  //   return this.hover ? 'hover' : 'not'
  // }
  public products : any = [];
  key: string = 'CART-LIST';
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
    })
    if (this.localStorge.isLocalStorageSupported) {
      let localList = this.localStorge.get(this.key);
      console.log(localList);
      if (localList) {
        this.cartService.addItems(localList);
      }
    }
  }
  // onHover(){
  //   this.hover = !this.hover;
  // }
}
