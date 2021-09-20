import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductsComponent } from './components/products/products.component';


const routes : Routes = [

  {path:'inventory',component: InventoryComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
