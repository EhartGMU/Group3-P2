import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})




export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup ( 
    {
      id!: new FormControl(''),
      fullName: new FormControl(''),
      pass: new FormControl(''),
      email: new FormControl(''),
      dateJoined!: new FormControl(''),
      isAdmin!: new FormControl('')
    });
    
  constructor( private service :SharedService, private formBuilder: FormBuilder) { }




  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id!:[''],
      fullName:[''],
      pass: [''],
      email: [''],
      dateJoined!:[''],
      isAdmin!:['']
    })
  }
  
  get f() { return this.form.controls; }


  onSubmit()
  {
    this.service.RegisterUser(this.form.value).subscribe(
      res => {
        alert("Attempting to register User successfully added!");
        
      });
}
}
