import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { DetailsComponent } from './review/details/details.component';
import { AllComponent } from './review/all/all.component';
import { AuthorComponent } from './review/author/author.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    BrandComponent,
    CategoryComponent,
    DetailsComponent,
    AllComponent,
    AuthorComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
