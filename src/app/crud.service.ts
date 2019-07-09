import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Book } from './crud/crud.component';








@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url:string = "../assets/booklist.json"
  constructor(private httpClient:HttpClient) { }

  getResponse(){
    return this.httpClient.get<Book[]>(this.url)
  }


    } 
    
    


