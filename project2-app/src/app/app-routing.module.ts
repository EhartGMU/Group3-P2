import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { DisplayproductComponent } from './components/displayproduct/displayproduct.component';
import { SidecheckoutComponent } from './components/sidecheckout/sidecheckout.component';




const routes : Routes = [

  {path:'inventory',component: InventoryComponent},
  {path:'order',component:OrderComponent},
  {path:'product',component:DisplayproductComponent},
  {path:'sidecheckout', component:SidecheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
