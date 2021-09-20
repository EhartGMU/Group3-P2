import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

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
