import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    let productsUrl = this.url + "products/";
    return this.http.get<Product[]>(productsUrl);
  }
}
