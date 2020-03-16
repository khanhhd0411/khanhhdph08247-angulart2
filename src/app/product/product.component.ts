import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product : Product ={
  name: 'Iteam 1',
  price: 25.99,
  desc: 'Mo ta san pham'
}
}