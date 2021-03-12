import { Component, OnInit } from '@angular/core';
import { CategoryValueService } from '../category-value.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemCount:number;
  constructor(private item:CategoryValueService) { }

  ngOnInit(): void {
    this.itemCount=0;
    this.item.changeItem.subscribe((data:number)=>{
      this.itemCount+=data;
      //console.log(this.itemCount)
    })
   
  }
}
