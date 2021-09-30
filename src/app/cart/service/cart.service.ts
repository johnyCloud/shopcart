import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/porducts/models/product';
import { Totals } from './totals';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    let select = this.cartItemList.find((elemnt: any) => elemnt.id === product.id)
    if(select) {
      select.quantity += 1
      select.total = select.price * select.quantity;
    } else {
      this.cartItemList.push(product);
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.productList);
  }
  addItems(items: any) {
    console.log(items);
    
    items.forEach((item: any) => {
      this.addtoCart(item);
    });
  }

  plus(id: any) {
    this.cartItemList.map((a:any, index:any)=>{
      if(id === a.id){
        a.quantity += 1;
        a.total = a.price * a.quantity;
      }
    })
    this.productList.next(this.cartItemList);
  }
  minus(id : any){
    let selctedItem = this.cartItemList.find((elemnt: any) => elemnt.id === id)
    
    if ( selctedItem.quantity > 1){
      selctedItem.quantity -= 1;
      selctedItem.total = selctedItem.price * selctedItem.quantity;
    } else  {
      this.cartItemList = this.cartItemList.filter((item: any) => item.id !== selctedItem.id)
    }
    this.productList.next(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
