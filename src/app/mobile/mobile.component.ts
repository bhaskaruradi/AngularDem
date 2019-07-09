import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
export class  Product {
  id:number;
  productCategories:string;
  productName:string;
  price:number;
  quantity:number

  constructor( id:number,
    productCategories:string,
    productName:string,
    price:number,
    quantity:number){
     this.id = id;
     this.productCategories = productCategories;
     this.productName =productName;
     this.price = price;
     this.quantity = quantity;
  }
}

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
products : Array<Product> = [];
  constructor(private service:MobileService) { }

  ngOnInit() : void {
    this.service.getResponse().subscribe(
      (response) => {
        console.log(response)
        this.products = response
       console.log(this.products)
      },
    (error) =>{
      console.log("not responded")
    }
    )
   console.log('here' + this.products)

  }
  stateSort(){
    this.products.sort((a,b) =>a.productCategories.localeCompare(b.productCategories))
 }

 nameSort(){
   this.products.sort((a,b) =>a.productName.localeCompare(b.productName))
}

quantitySort(){
  this.products.sort(function(obj1,obj2){
    return obj1.quantity - obj2.quantity;
     });
    }

idSort(){
  this.products.sort(function(obj1,obj2){
 return obj1.id - obj2.id;
  });
}


priceSort(){
 this.products.sort(function(obj1,obj2){
return obj1.price - obj2.price;
 });
}
deleteBook(id:number){
  this.products.splice(id,1)

}
}
