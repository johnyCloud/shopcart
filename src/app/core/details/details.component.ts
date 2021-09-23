import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/porducts/models/product';
import { ProductsService } from 'src/app/porducts/service/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  product?: Product;
  ngOnInit(): void {
    let selectId = this.route.snapshot.paramMap.get('id');
    this.product = this.productsService.getItemById(parseInt(<string>selectId));
  }

}
