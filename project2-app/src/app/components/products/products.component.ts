import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Product } from '../interfaces/product';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Inventory } from '../interfaces/inventory';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form: FormGroup = new FormGroup ( 
    {   
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(1),
      orderId: new FormControl(10),
      inventoryId: new FormControl(15),
    });


  constructor(private service :SharedService, private formBuilder: FormBuilder) { }

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
  onSubmit(dataItem: Inventory)
  {  
    this.form.value.name = dataItem.name;
    this.form.value.price = dataItem.price;
    console.log(this.form);
    console.log(dataItem);
    this.service.addProduct(this.form.value).subscribe(
      res => {
        alert("Product successfully added!");
      });
}

}
