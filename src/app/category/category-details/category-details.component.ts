import { Component, OnInit } from '@angular/core';
import { CategoryStruct } from '../category-struct.modal';
import { CategoryValueService } from '../../category-value.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  arr:CategoryStruct[]=[];
  name:string;
  constructor(private cs:CategoryValueService,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
        this.name=params['name'];
        //console.log(this.name);
        this.arr=this.cs.getData(this.name);
        this.cs.change.subscribe((data:CategoryStruct[])=>{
         this.arr=data;
        });
    });
   
  }


}
