import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SlideComponent } from "./slide/slide.component";
import { CategoryComponent } from "./category/category.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ManagerProductComponent } from "./manager-product/manager-product.component";
import { DetailComponent } from "./detail/detail.component";
import { ProductService } from "./services/product.service";
import { ProductAddComponent } from "./product-add/product-add.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SlideComponent,
    CategoryComponent,
    ProductListComponent,
    ProductComponent,
    ManagerProductComponent,
    DetailComponent,
    ProductAddComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
imports: [BrowserModule, AppRoutingModule];
