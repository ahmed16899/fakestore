import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  Language = new BehaviorSubject(false);

  getProducts():Observable<any>
  {
    return this._HttpClient.get(`https://dummyjson.com/products`);
  }
  getSingleProduct(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
  }
}
