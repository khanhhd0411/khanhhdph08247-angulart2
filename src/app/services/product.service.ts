import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";
@Injectable()
export class ProductService {
  products = data;
  constructor() {}
  getProducts() {
    return this.products;
  }
  removeProducts(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }
  addProduct(product) {
    console.log(product);

    let newObj = { ...product };
    console.log(newObj);

    this.products.push(newObj);
    console.log(this.products);
  }
}
