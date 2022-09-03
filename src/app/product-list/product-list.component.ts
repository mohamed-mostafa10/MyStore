import { ProductService } from './../services/product.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  @ViewChild("Quantity") Quantity: ElementRef;

  @Output() data: EventEmitter<any> = new EventEmitter<any>();

  products: Products[] = [];

  constructor(private productService: ProductService) {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe((data) => {});
  }

  addToCart(product: Products, qty:any) {
    
    this.productService.addToCart(product);

    this.data.emit(product.name)

  }

  ngAfterViewInit() {
  }

  qty(product: Products, qty:any) {
    product.qty = qty;
  }
}
