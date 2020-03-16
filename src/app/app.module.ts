import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ManagerProductComponent } from './manager-product/manager-product.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, CategoryComponent, ProductListComponent, ProductComponent, ManagerProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
imports: [
BrowserModule,
]
