import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { HeaderComponent } from './components/header/header.component';

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
   
    HeaderComponent,
    
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
