import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { NavbarComponent } from './nav/nav.component';

import { ProductService } from './products/product.service';
import { CategoryService } from './category-lists/category.service';
import { CategoryListsComponent } from './category-lists/category-lists.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule, RouterModule.forRoot([
      {
        path: '', component: ProductComponent
      },
      {
        path: 'Category', component: CategoryListsComponent
      },
      {
        path: 'Vendor', component: VendorListComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
    ])
  ],
  declarations: [AppComponent,
    ProductComponent,
    NavbarComponent,
    CategoryListsComponent,
    VendorListComponent
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }