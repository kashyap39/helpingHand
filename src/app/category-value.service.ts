import {Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { CategoryStruct } from './category/category-struct.modal';

@Injectable({
  providedIn: 'root'
})
export class CategoryValueService implements OnInit {
  change= new Subject<CategoryStruct[]>();
  changeItem= new Subject<number>();
   name:string;
  allCategories:CategoryStruct[]=[
    new CategoryStruct('https://www.desidakaar.com/wp-content/uploads/2017/02/Coriander-Powder-Recipe.jpg',
    'Coriander',
    50,
    0,
    0
    ),
    new CategoryStruct('https://image.forskning.no/1665546.jpg?imageId=1665546&panow=100.01001634615&panoh=58.84103697479&panox=0.01001634615385&panoy=21.848739495798&heightw=35.186100395257&heighth=99.329338356164&heightx=32.411067193676&heighty=0&width=1200&height=630',
    'Laundry',
    100,
    0,
    1
    ),
    new CategoryStruct('data:image/jpeg;base64,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',
    'Oil',
    150,
    0,
    2
    ),
    new CategoryStruct('https://www.veggycation.com.au/siteassets/veggycationvegetable/capsicum-green.jpg',
    'Capsicum',
    100,
    0,
    3
    ),
    new CategoryStruct('https://static.wikia.nocookie.net/phobia/images/8/82/Milk2.jpg/revision/latest?cb=20170124115645',
    'Milk',
    40,
    0,
    4
    ),
  ];
  kitchen:CategoryStruct[]=[
    new CategoryStruct('https://www.desidakaar.com/wp-content/uploads/2017/02/Coriander-Powder-Recipe.jpg',
    'Coriander',
    60,
    0,
    0
    ),
    new CategoryStruct('https://florafoods.in/wp-content/uploads/2019/06/Byadagi-Chilli-Powder-FloraFoods.jpg',
    'Chilli ',
    200,
    0,
    1
    ),
  ];

  vegetables:CategoryStruct[]=[
    new CategoryStruct('https://www.astrogle.com/images/2015/01/brinjal.jpg',
    'Brinjal',
    30,
    0,
    0
    ),
    new CategoryStruct('https://5.imimg.com/data5/CV/PR/MY-43305353/fresh-lady-finger-500x500.jpg',
    'Lady Finger',
    70,
    0,
    1
    ),
    new CategoryStruct('https://ichef.bbci.co.uk/news/976/cpsprodpb/4F91/production/_108296302_cauliflowergetty.jpg',
    'CauliFlower',
    20,
    0,
    2
    ),
    new CategoryStruct('https://media.healthyfood.com/wp-content/uploads/2017/03/What_to_do_with_broccoli-1-500x375.jpg',
    'Broccoli',
    20,
    0,
    3
    )
  ];
  laundary:CategoryStruct[]=[
    new CategoryStruct('https://image.forskning.no/1665546.jpg?imageId=1665546&panow=100.01001634615&panoh=58.84103697479&panox=0.01001634615385&panoy=21.848739495798&heightw=35.186100395257&heighth=99.329338356164&heightx=32.411067193676&heighty=0&width=1200&height=630',
    'Laundry',
    100,
    0,
    0
    )
  ];

  constructor(private route:ActivatedRoute) { }
  ngOnInit(){
    
    this.route.params.subscribe((params:Params)=>{
      this.name=params['name'];
      let ans;
      if(this.name==='Allcategories')
      ans=this.allCategories.slice();
      if(this.name==='Kitchen')
      ans=this.kitchen.slice();
      // //this.change.next(ans.slice());
      if(this.name==='vegetables')
      ans=this.vegetables.slice();
      if(this.name==='Laundry')
      ans=this.laundary.slice();
      this.change.next(ans.slice());
      this.changeItem.next(0);
    });
   
  }

  setItem(index:number,name:string){
    
    if(name==='Allcategories'){
    this.allCategories[index].item=this.allCategories[index].item+1;
      this.change.next(this.allCategories.slice());
      this.changeItem.next(1);}
      if(name==='Kitchen'){
        this.kitchen[index].item=this.kitchen[index].item+1;
          this.change.next(this.kitchen.slice());
          this.changeItem.next(1);}
          if(name==='vegetables'){
            this.vegetables[index].item=this.vegetables[index].item+1;
              this.change.next(this.vegetables.slice());
              this.changeItem.next(1);}
              if(name==='Laundry'){
                this.laundary[index].item=this.laundary[index].item+1;
                  this.change.next(this.laundary.slice());
                  this.changeItem.next(1);}
                 // this.getForShoppingCart();
      //console.log(this.allCategories[index]);
  }
  getData(name:string){
    if(name==='Allcategories'){
    return this.allCategories.slice();}
    if(name==='Kitchen'){
    return this.kitchen.slice();}
    if(name==='vegetables'){
      return this.vegetables.slice();}
      if(name==='Laundry'){
      return this.laundary.slice();}
  }
  removeItem(index:number,name:string){
    // this.allCategories[index].item=this.allCategories[index].item-1;
    //   this.change.next(this.allCategories.slice());
    //   this.changeItem.next(-1);
      //console.log(this.allCategories[index]);
      
      if(name==='Allcategories'){
        if(this.allCategories[index].item>0)
        this.allCategories[index].item=this.allCategories[index].item-1;
          this.change.next(this.allCategories.slice());
          this.changeItem.next(-1);
        }
          if(name==='Kitchen'){
            if(this.kitchen[index].item>0)
            this.kitchen[index].item=this.kitchen[index].item-1;
              this.change.next(this.kitchen.slice());
              this.changeItem.next(-1);}
              if(name==='vegetables'){
                if(this.vegetables[index].item>0)
                this.vegetables[index].item=this.vegetables[index].item-1;
                  this.change.next(this.vegetables.slice());
                  this.changeItem.next(-1);}
                  if(name==='Laundry'){
                    if(this.laundary[index].item>0)
                    this.laundary[index].item=this.laundary[index].item-1;
                      this.change.next(this.laundary.slice());
                      this.changeItem.next(-1);
                    }
  }
  getItemCount(){
    return 0;
  }

  solveItem(result,nameOfCategory,arr,x){
    for(let it of arr){
      if(it.item>0){
        result.push(it);
        nameOfCategory.push(x);
      }
    }
   
  }
  getForShoppingCart(){
    let result:CategoryStruct[]=[];
    let nameOfCategory=[];
    // for(let it of this.allCategories){
    //   if(it.item>0){
    //     result.push(it);
    //     nameOfCategory.push('allCategories');
    //   }
    // }
    this.solveItem(result,nameOfCategory,this.allCategories,'allCategories');
    this.solveItem(result,nameOfCategory,this.kitchen,'kitchen');
    this.solveItem(result,nameOfCategory,this.vegetables,'vegetables');
    this.solveItem(result,nameOfCategory,this.laundary,'laundary');
    return [result,nameOfCategory];
  }
  
 
}
