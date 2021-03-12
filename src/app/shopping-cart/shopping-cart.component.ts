import { Component, OnInit } from '@angular/core';
import { CategoryValueService } from '../category-value.service';
import { CategoryStruct } from '../category/category-struct.modal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items:CategoryStruct[]=[];
  name:string[]=[];
  uniq:number;
  total_price:number=0;
  size:number=0;
  constructor(private ser:CategoryValueService) { }

  ngOnInit(): void {
    let value=this.ser.getForShoppingCart();
    this.items=value[0];
    this.name=value[1];
    this.size=this.items.length;
    for(let x of this.items){
      this.total_price+=(x.item*x.price);
    }
  }
  remove(index:number,name:number){
    console.log(index,name);
    let x;
    this.items[name].item=this.items[name].item-1;
    
    if(name==0)
    x="Allcategories";
    if(name==1)
    x="Kitchen";
    if(name==2)
    x="vegetables";
    if(name==3)
    x="Laundry";
    this.ser.removeItem(index,x);
    this.total_price-=this.items[name].price;
    if(this.items[name].item==0){
      this.items.splice(name,1);
      this.size--;
    }
  }
  add(index:number,name:number){
    console.log(index,name);
    let x;
    this.items[name].item+=1;
    
    if(name==0)
    x="Allcategories";
    if(name==1)
    x="Kitchen";
    if(name==2)
    x="vegetables";
    if(name==3)
    x="Laundry";
    this.ser.setItem(index,x);
    this.total_price+=this.items[name].price;

  }

  check(){
    this.size=0;
    
  }

}
