import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { InventoryComponent } from './components/inventory/inventory.component';
import { GetComponent } from './components/inventory/get/get.component';
import { AddEditComponent } from './components/inventory/add-edit/add-edit.component';
import { OrderComponent } from './components/order/order.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GetorderComponent } from './components/order/getorder/getorder.component';
import { AddEditorderComponent } from './components/order/add-editorder/add-editorder.component';
import { DisplayproductComponent } from './components/displayproduct/displayproduct.component';
import { GetproductComponent } from './components/displayproduct/getproduct/getproduct.component';



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
    OrderComponent,
    GetorderComponent,
    AddEditorderComponent,
    DisplayproductComponent,
    GetproductComponent,

  
    
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
