import { Component, OnInit } from '@angular/core';
import{data} from '../MockData';
import{Product} from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// products = data;
// selected: Product;
// hienthi(product){
//   this.selected = product;
// }
}