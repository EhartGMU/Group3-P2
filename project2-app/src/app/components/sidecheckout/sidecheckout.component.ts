import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sidecheckout',
  templateUrl: './sidecheckout.component.html',
  styleUrls: ['./sidecheckout.component.css']
})
export class SidecheckoutComponent implements OnInit {

  constructor(private service :SharedService) { }
  OrderList:any=[];
  ProductList:any=[];

  ngOnInit(): void {
    this.RefreshOrderList();

    this.RefreshProductList();
  }
  RefreshOrderList()
  {
    this.service.ListOrders().subscribe(data=>{
this.OrderList = data;

    });
  }  

  RefreshProductList()
  {
    this.service.ListProduct().subscribe(data=>{
this.ProductList = data;

    });
  }  


}
