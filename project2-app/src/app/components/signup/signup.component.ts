import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor( private service :SharedService) { }

  @Input() t:any;

  id!: number;
  fullname!: string;
  pass!: string;
  email!: string;
  datejoined!: string;
  isadmin!: number;


  ngOnInit(): void {
    this.id= this.t.id;
    this.fullname=this.t.fullname;
    this.pass= this.t.pass;
    
  }

  
  RegisterUser()
  {
    var val= {id: this.id,
      fullname: this.fullname,
      pass: this.pass,
      email: this.email,
      datejoined: this.datejoined,
      isadmin: this.isadmin};

    this.service.RegisterUser(val).subscribe(res=> {
      alert(res.toString());
    });

   
  }  
}
