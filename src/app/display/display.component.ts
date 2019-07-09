import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
   result:number
  constructor(private addservice:AddService) { }

  ngOnInit() {
     this.result = this.addservice.getAns()
  }

}
