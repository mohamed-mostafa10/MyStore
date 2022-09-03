import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Checkout } from '../models/checkout';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Products[] = [];
  products$ = new BehaviorSubject<Products[]>(this.products);

  cart: Products[] = [];
  cart$ = new BehaviorSubject<Products[]>(this.cart);

  total: number;

  selectedCheckout: Checkout;





  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get('../../assets/data.json').pipe(
      map((products: any) => {
        this.products = products;
        this.products$.next(this.products);
      })
    );
  }

  addToCart(product: Products) {

    let current = this.cart.filter(x => x.id == product.id);

    if (current.length > 0) {
      this.cart.filter(x => x.id == product.id)[0].qty = product.qty
      alert(product.name +" added to cart");
    } else {
      this.cart.push(product);
      alert(product.name +" added to cart");
    }
  }
  removeProduct(cart:Products, id: number) {
    const index = this.cart.findIndex(cart => cart.id === id);
    this.cart.splice(index, 1);
    alert(cart.name + " removed from cart");
    this.cart$.next(this.cart);

  }

}
