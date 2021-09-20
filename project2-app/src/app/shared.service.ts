import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44357/api";

  constructor(private https:HttpClient) { }

  ListInventory():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/inventory');
  }

  ListOrders():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/order');
  }

  ListProduct():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/product');
  }


  addInventory(val:any){
    return this.https.post(this.APIUrl+'/inventory',val)
  }

}
