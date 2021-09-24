import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit {

 
    closeResult = '';
    

  constructor( private modalService: NgbModal, private service:SharedService) { }

  Register:any=[];
  ActivateSignupComp:boolean=false;
  t:any;


  ngOnInit(): void {
    
  }

  open2(content2: any) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-titlesignin'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  open(content: any) {
    this.t={
      id:0,
      fullname:"",
      pass:"",
      email:"",
      datejoined:"",
      isadmin:""

    }
    this.ActivateSignupComp=true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }




  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
 
}
