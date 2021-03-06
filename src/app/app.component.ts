import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { ProductsService } from './porducts/service/products.service';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(
    // private api: ApiService,
    // private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    // this.getProductList();
  }

  // getProductList() {
  //   this.api.getProducts().subscribe((res) => {
  //     this.productsService.addItems([...res]);
  //     console.log(res);
      
  //   });
  // }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
