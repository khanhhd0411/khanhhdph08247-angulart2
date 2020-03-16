import { Component, OnInit } from '@angular/core';
import{data} from '../MockData';
import{Product} from '../Product';
@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = data;
selected: Product;
showDetail(product){
  this.selected = product;
}
remove(id){
  return this.products = this.products.filter(product => product.id != id);
}
}