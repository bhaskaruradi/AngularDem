import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    id:number;
  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit() {
     this.id = this.activateroute.snapshot.params["id"];
  }

}
