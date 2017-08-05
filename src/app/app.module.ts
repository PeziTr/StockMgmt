
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { GetVendorComponent } from './get-vendor/get-vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVendorComponent,
    GetVendorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
