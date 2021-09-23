import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './components/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44357/api";

  constructor(private https:HttpClient) { }

  ListInventory():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/inventory');
  }

  ListUser():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/User');
  }

  LoginUser():Observable<any[]>{
    return this.https.get<any>(this.APIUrl+'/User/create/false');
  }



  ListCategory():Observable<Category[]> {
    return this.https.get<Category[]>( this.APIUrl+'/category');
  }

  
  AddCategory(category : Category):Observable<Category> {
    return this.https.post<Category>(this.APIUrl + '/category',category)

  }


  RegisterUser(val:any){
    return this.https.post<any>(this.APIUrl+'/User/create/true', val);
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
