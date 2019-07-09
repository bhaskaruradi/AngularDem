import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Student } from 'src/student';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//  message  = "hello";

//  display(){
//    return "bhaskar";
//  }

//  path = "data:image/jpeg;base64,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"

//  butonEvent(){
//    alert("clicked")
//  }







// show(num1,num2){
//   alert(num1 + num2)
// }


// isLoggedIn: boolean = false;

// colleges : Array<string> = ["VJIT","JBIET","CVSR"]

// cars : Array<Car> = [
// {name:"VOLVO",color:"red",speed:200},
// {name:"Mercedes",color:"blue",speed:300}

// ]


// menu:number;

students:Array<Student> = [
  {name:"Bhaskar",rollno:101,college:'vjit',gender:'male'},
  {name:"Akshitha",rollno:102,college:'vjit',gender:'female'},
  {name:"Suresh",rollno:103,college:'vjit',gender:'male'}
]


}
