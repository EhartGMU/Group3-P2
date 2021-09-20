import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared-module/shared.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [ BrowserModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
