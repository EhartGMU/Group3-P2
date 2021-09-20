import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/app/shared-module/shared.module';




@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, RouterModule, SharedModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
