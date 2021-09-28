import { Injectable } from '@angular/core';
import {Product} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products?: Product[] ;

  addItems(items: Product[]){
    this.products = [...items];
  }
  getItems() {
    return this.products;
  }
  getItemById(id : number){
    return this.products?.find((item)=> item.id === id)
  }
  constructor() { }
}
