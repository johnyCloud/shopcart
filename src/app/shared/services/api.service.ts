import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';
// import { Observable } from 'rxjs';
import { Product } from '../../porducts/models/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = environment.apiURL;

  constructor(private http: HttpClient) { }
  
  getProduct(){
    return this.http.get<any>(this.url + "products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductById(id : string){
    return this.http.get<any>(this.url + "products/" + id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
