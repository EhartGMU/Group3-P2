import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { HeaderComponent } from './components/header/header.component';

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

import { InventoryComponent } from './components/inventory/inventory.component';
import { GetComponent } from './components/inventory/get/get.component';
import { AddEditComponent } from './components/inventory/add-edit/add-edit.component';

import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
   
    HeaderComponent,
    InventoryComponent,
    ProductsComponent,
    FooterComponent,
    
    GetComponent,
    AddEditComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
