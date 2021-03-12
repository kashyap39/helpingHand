import { Component, Input, OnInit } from '@angular/core';
import { CategoryStruct } from '../../category-struct.modal';
import { CategoryValueService } from '../../../category-value.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() data:CategoryStruct;
  @Input() name:string;
  constructor(private cat:CategoryValueService) { }

  ngOnInit(): void {
  }
  addItem(){
   this.cat.setItem(this.data.id,this.name);
  }
  subItem(){
    this.cat.removeItem(this.data.id,this.name);
  }
}
