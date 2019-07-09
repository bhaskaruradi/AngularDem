import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logintemp',
  templateUrl: './logintemp.component.html',
  styleUrls: ['./logintemp.component.css']
})
export class LogintempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 login(value:any){
   console.log(value.name)
   console.log(value.password)
 }

 regiser(value:any){
   alert(value.name)
 }
}
