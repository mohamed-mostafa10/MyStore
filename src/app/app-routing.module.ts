import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', component: ProductComponent},
  {path:'product-details/:id', component: ProductDetailsComponent},
  {path:'order-confirm', component: OrderConfirmationPageComponent},
  {path:'checkout-form', component: CheckoutFormComponent},
  {path:'shopping-cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
