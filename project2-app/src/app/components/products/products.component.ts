import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service :SharedService) { }

  InventoryList:any=[];

  ngOnInit(): void {
    this.refreshinvList();
  }

  refreshinvList()
  {
    this.service.ListInventory().subscribe(data=>{
this.InventoryList = data;

    });
  }  

}
