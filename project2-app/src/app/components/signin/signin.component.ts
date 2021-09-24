import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  constructor(private service: SharedService, private formBuilder: FormBuilder, public modal: NgbActiveModal) { }

  form: FormGroup = new FormGroup(
    {
      id!: new FormControl(''),
      fullName: new FormControl(''),
      pass: new FormControl(''),
      email: new FormControl(''),
      dateJoined!: new FormControl(''),
      isAdmin!: new FormControl('')
    });


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pass: [''],
      email: [''],
    })
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.service.LoginUser(this.form.value).subscribe(
      res => {
        console.log("User logged in!");

      });
  }

}
