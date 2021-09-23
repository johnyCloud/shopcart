import { Injectable } from '@angular/core';
import { Product } from 'src/app/porducts/models/product';
import {Totals} from './totals';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartList: Product[] = [];
  private totals: Totals[] = [];
  
  addItem(item: Product){
    if (this.cartList.includes(item)){
      let selctedTotal = this.totals.find(elemnt => elemnt.id === item.id)
      selctedTotal!.total += 1
    } else{
      this.cartList.push(item);
      this.totals.push({id: item.id, total: 1});
    }
  }

  getItems(){
    return this.cartList
  }
  getTotals(){
    return this.totals
  }
  

  plus(id: number){
    let selctedTotal = this.totals.find(elemnt => elemnt.id === id)
    selctedTotal!.total += 1
  }
  minus(id: number){
    let selctedTotal = this.totals.find(elemnt => elemnt.id === id)
    if (selctedTotal!.total > 1){
      selctedTotal!.total -= 1
    } else{
      this.totals = this.totals.filter(item => item == selctedTotal);
    }
  }

  remove(id: number){
    this.cartList = this.cartList.filter(item => item.id !== id);
    this.totals = this.totals.filter(item => item.id !== id);
    console.log(this.cartList);
    
  }

  clearCart(){
    this.cartList = [];
    this.totals = [];
    return [];
  }


}
