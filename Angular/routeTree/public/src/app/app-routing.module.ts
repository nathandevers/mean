import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './product/brand/brand.component';
import { CategoryComponent } from './product/category/category.component';
import { DetailsComponent } from './review/details/details.component';

import { ReviewComponent } from './review/review.component';
import { AllComponent } from './review/all/all.component';
import { AuthorComponent } from './review/author/author.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent, children:[
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent },
    { path: 'details/:id', component: ProductdetailsComponent }]
  },
  { path: 'reviews', component: ReviewComponent, children:[
    { path: 'all/:id', component: AllComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'details/:id', component: DetailsComponent }]
  },
  { path: '**', redirectTo: '/'},
  { path: '', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
