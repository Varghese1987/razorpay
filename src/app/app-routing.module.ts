import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path:"",
    component : ProductsPageComponent
  },
  {
    path:"payment/:id",
    component: PaymentComponent
  },
  {
    path:"orders",
    component : OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
