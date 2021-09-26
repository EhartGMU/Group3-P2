import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


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
      quantity: new FormControl('')

    });

  constructor(private service :SharedService, private formBuilder: FormBuilder) { }

  InventoryList:any=[];

  ngOnInit(): void {
    this.refreshinvList();
    this.form = this.formBuilder.group({
      name:[''],
      price:[''],
      quantity:['']
    });
  }

  refreshinvList()
  {
    this.service.ListInventory().subscribe(data=>{
this.InventoryList = data;

    });
  }  

  onSubmit()
  {
    
    this.service.addProduct(this.form.value).subscribe(
      res => {
        alert("Category  successfully added!");
      });


}

}
