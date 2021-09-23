import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Category } from '../../interfaces/category';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})

export class GetComponent implements OnInit {

  constructor(private service :SharedService, private formBuilder: FormBuilder) { }

  InventoryList:any=[];

  categories: Category[] | null = null ;

  form: FormGroup = new FormGroup (
  
  {
    subject: new FormControl('')
  });
 

  ngOnInit(): void {
    this.refreshinvList();
    this.GetCategory();

    this.form = this.formBuilder.group({
      subject:['']
    });
  }

 
  refreshinvList()
  {
    this.service.ListInventory().subscribe(data=>{
this.InventoryList = data;

    });
  }  


  GetCategory()
  {
    this.service.ListCategory().subscribe((categories) => {
      this.categories = categories;
    });

  }

  get f() { return this.form.controls; }

  onSubmit()
  {
    this.form = this.formBuilder.group({
      subject:['']
    });

    this.service.AddCategory(this.form.value).subscribe(
      res => {
        alert("Category  successfully added!");
      });


}
}
