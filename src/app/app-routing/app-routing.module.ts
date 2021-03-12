import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from '../category/category-details/category-details.component';
import { CategoryComponent } from '../category/category.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { PaymentComponent } from '../payment/payment.component';
import { LoginComponent } from '../login/login.component';

const approutes:Routes=[
  { path:'login' , component:LoginComponent},
  { path:'shoppingcart' , component:ShoppingCartComponent},
  { path:'shoppingcart/payment',component:PaymentComponent},
  { path:'', redirectTo:'/categories/details/Allcategories',pathMatch:'full'},
  {path:'categories' ,component:CategoryComponent,children:[
    {path:'details/:name' , component:CategoryDetailsComponent},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
