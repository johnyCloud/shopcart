import { Injectable } from '@angular/core';
import { Product } from '../../porducts/models/product'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  //static key = "CART-LIST"

  localStorage: Storage;
  constructor() {
    this.localStorage = window.localStorage;
  }
  get(key: string): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(<string>this.localStorage.getItem(key));
    }
    return {};
  }
  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
