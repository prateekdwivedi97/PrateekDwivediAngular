import { Injectable } from '@angular/core';
import {Product} from './product';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PservService {
  static user:Product[];
  baseURL:string="./assets/products.json";
  constructor(private http: HttpClient) {
    this.http.get<Product[]>(this.baseURL).subscribe(data=>{
      PservService.user=data; 
    },err=>{
      console.log(err.stack);
    }
    );
  }
  getAll(){
    return PservService.user;
  } 
  addProduct(product:Product){
    PservService.user.push(product);
  }
}
