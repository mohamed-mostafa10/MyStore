import { Checkout } from './../models/checkout';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {

  @Input() products : any;


  checkoutForm: FormGroup;

  Checkouts: Checkout[] = [];

  constructor(
    public productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }
  get f() {
    return this.checkoutForm.controls;
  }

  add() {
    console.log(this.checkoutForm);

    if (this.checkoutForm.valid) {
      let data: Checkout = this.checkoutForm.value;

      console.log(data);

      this.Checkouts.push(data);

      this.productService.selectedCheckout = data;

      this.checkoutForm.reset();

      this.router.navigateByUrl('/order-confirm');
    }
  }

  // init form
  initForm(checkout: Checkout = this.productService.selectedCheckout) {
    this.checkoutForm = this.formBuilder.group({
      fullName: [checkout?.fullName, Validators.required],
      address: [checkout?.address, Validators.required],
      cardNumber: [ checkout?.cardNumber, [Validators.required, Validators.minLength(16)]]
    });
  }

}
