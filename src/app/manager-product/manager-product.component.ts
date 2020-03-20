import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";
@Component({
  selector: "app-manager-product",
  templateUrl: "./manager-product.component.html",
  styleUrls: ["./manager-product.component.css"]
})
export class ManagerProductComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  selected: Product;
  showDetail(product) {
    this.selected = product;
  }
  remove(id) {
    this.products =  this.productService.removeProducts(id);
  }
}
