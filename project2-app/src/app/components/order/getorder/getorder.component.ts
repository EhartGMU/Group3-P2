import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-getorder',
  templateUrl: './getorder.component.html',
  styleUrls: ['./getorder.component.css']
})
export class GetorderComponent implements OnInit {

  constructor(private service :SharedService) { }

  OrderList:any=[];

  ngOnInit(): void {
    this.RefreshOrderList();
  }

  RefreshOrderList()
  {
    this.service.ListOrders().subscribe(data=>{
this.OrderList = data;

    });
  }  

}
