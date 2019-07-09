import { Injectable } from '@angular/core';
import { Product } from './mobile/mobile.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  url:string = "../assets/productlist.json"
  constructor(private httpClient:HttpClient) { }

  getResponse(){
    return this.httpClient.get<Product[]>(this.url)
  }


    } 
    

