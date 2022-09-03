import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Products;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      
      this.product = this.productService.products.filter(x => x.id == Number(id))[0];
    });
  }

  addToCart(){

    this.productService.addToCart(this.product)
  }
  
  qty(product: Products, qty:any) {
    product.qty = qty;
  }

}
