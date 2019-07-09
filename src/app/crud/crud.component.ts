import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../crud.service';


export class  Book {
  id:number;
  title:string;
  year:number;
  author:string;

  constructor( id:number,
    title:string,
    year:number,
    author:string){
     this.id = id;
     this.title =title;
     this.year = year;
     this.author = author;
  }
}



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
url:string = "../assets/booklist.json"
books : Array<Book> = [];
isClicked :boolean = false
 no :number
 book :Book
  constructor(private httpClient:HttpClient,private service:CrudService) { }

  ngOnInit() : void {
    this.service.getResponse().subscribe(
      (response) => {
        console.log(response)
        this.books = response
       console.log(this.books)
      }
    )
   console.log('here' + this.books)

  }

  titleSort(){
     this.books.sort((a,b) =>a.title.localeCompare(b.title))
  }
 
  authorSort(){
    this.books.sort((a,b) =>a.author.localeCompare(b.author))
 }

 idSort(){
   this.books.sort(function(obj1,obj2){
  return obj1.id - obj2.id;
   });
 }

 yearSort(){
  this.books.sort(function(obj1,obj2){
 return obj1.year - obj2.year;
  });
}


  add(value:any){
      this.books.push(new Book(value.id,value.title,value.year,value.author))
      console.log(this.books)
  }

  deleteBook(id:number){
    this.books.splice(id,1)

  }
  
  updateBook(id:number){
      this.isClicked = true
   this.no = id
   this.book = this.books[id];
    } 
    
    update(value:any){
      value.id = this.books[this.no].id
      this.books.splice(this.no,1,value)
      this.isClicked = false
    }
  }  
  

