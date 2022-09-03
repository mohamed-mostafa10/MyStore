import { Checkout } from './../models/checkout';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit {

  checkout: Checkout;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
