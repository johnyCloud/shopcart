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
    if (this.cartList.find(el =>  el.id === item.id)){
      //let selctedTotal = this.totals.find(elemnt => elemnt.id === item.id)
    } else{
      this.cartList.push(item);
      this.totals.push({id: item.id, total: 1});
    }
    
  }

  addItems(items: Product[]){
    items.forEach(item=>{
      this.addItem(item);
    })
  }
  addTotals(totals: Totals[]){
    // let newTotals: Totals[] = totals;
    totals.forEach(item => {
      if (!this.totals.find(el =>  el.id === item.id)){
        this.totals.push(item);
      }
    })

  }

  getItems(){
    return this.cartList
  }
  getTotals(){
    return this.totals
  }
  

  plus(id: number) : Totals[] {
    let selctedTotal = this.totals.find(elemnt => elemnt.id === id)
    selctedTotal!.total += 1
    return this.totals;
  }
  minus(id: number) : Totals[] {
    let selctedTotal = this.totals.find(elemnt => elemnt.id === id)
    if (selctedTotal!.total >= 1){
      selctedTotal!.total -= 1
    } else{
      this.cartList = this.cartList.filter(item => item.id !== id);
      this.totals = this.totals.filter(item => item !== selctedTotal);
    }
    return this.totals
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
