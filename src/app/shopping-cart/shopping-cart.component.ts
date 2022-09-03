import { Products } from './../models/products';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  carts: Products[] = [];

  


  constructor(public productService: ProductService) {
    this.carts = productService.cart;
  }

  ngOnInit(): void {
    this.sum();
  }

  remove(row: any, id: number) {
    this.productService.removeProduct(row, id);
    this.sum();
  }

  qty(product: Products, qty: any) {
    product.qty = qty;
  }

  sum() {
    this.productService.total = 0;
    this.carts.forEach((row) => {
      let qty = row.qty == null ? 1 : row.qty;

      let sum = qty * row.price;

      this.productService.total += sum;

      console.log(sum);

      console.log(this.productService.total);
    });
  }

   
}
