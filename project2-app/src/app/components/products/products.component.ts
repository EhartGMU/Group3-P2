import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Product } from '../interfaces/product';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../interfaces/product';
import { UserService } from 'src/app/user/user.service';
import { User } from '../interfaces/user';
import { Inventory } from '../interfaces/inventory';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  form: FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(1),
      orderId: new FormControl(10),
      inventoryId: new FormControl(15),
    });

  constructor(private service: SharedService, private formBuilder: FormBuilder, private userService: UserService) { }


  InventoryList: any = [];
  ngOnInit(): void {
    this.refreshinvList();
    this.form = this.formBuilder.group({
      name: [''],
      price: [''],
      quantity: [''],
      inventoryId: ['']

    });
  }

  refreshinvList() {
    this.service.ListInventory().subscribe(data => {
      this.InventoryList = data;

    });
  }

  onSubmit(dataItem: Inventory) {
    console.log(this.form.value.inventoryId);
    this.userService.user$.subscribe(user => {
      this.service.GetUserOrder(user.id).subscribe(order => {
        const product: Product = {
          name: this.form.value.name,
          price: this.form.value.price,
          quantity: this.form.value.quantity,
          inventoryId: dataItem.id,
          orderId: order.id,
        
        };
        this.service.addProduct(product).subscribe(
          res => {
            alert("Category  successfully added!");
          });
      })
    })
  }
}