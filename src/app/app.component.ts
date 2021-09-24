import { Component } from '@angular/core';
import { ProductsService } from './porducts/service/products.service';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private api: ApiService,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.api.getProducts().subscribe((res) => {
      this.productsService.addItems([...res]);
    });
  }
}
