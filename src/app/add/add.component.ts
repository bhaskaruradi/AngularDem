import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
num1:number
num2:number
  constructor(private addservice:AddService) { }

  ngOnInit() {
  }
 addition(){
   this.addservice.n1 = this.num1;
   this.addservice.n2 = this.num2;
 }
}
