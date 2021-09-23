import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) { }



  checkoutForm = this.formBuilder.group({
    name: '',
    phone: '',
    address: ''
  });

  onSubmit(): void {
    this.cartService.clearCart();
    console.warn('Purchase order sent.Have a nice day!');
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
