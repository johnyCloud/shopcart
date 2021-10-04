import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/service/cart.service';
import { Product } from 'src/app/porducts/models/product';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cartService: CartService
  ) { }

  product?: Product;
  ngOnInit(): void {
    let selectId: string | null = this.route.snapshot.paramMap.get('id');
    this.api.getProductById(selectId!)
    .subscribe((res: Product | undefined)=>{
      this.product = res;
    });
  }
  addtocart(){
    this.cartService.addtoCart(this.product);
  }

}
