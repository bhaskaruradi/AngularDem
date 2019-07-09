import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.';
import { TestService } from '../test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user :any;
  isCollapsed : boolean = true;
  userName :string;
  httpResponse : any;
  isFetched :boolean = false


  // getCollapsed(){
  //   this.isCollapsed = !this.isCollapsed;
  // }

  // @Input("user") username : User;

  
  constructor(private  svc:TestService,private http:HttpClient) {
    // this.svc.printConsole("hii helloooo")
    
   }
   
  ngOnInit() {
   
    // this.user = {
    //   name : this.username.name,
    //   title:this.username.title,
    //   phone: this.username.phone
        
    // };
    // let obs = this.http.get("https://api.github.com/users/bhaskaruradi");
    // obs.subscribe((response) => console.log(response));

   
  }

  submit(){
    this.http.get("https://api.github.com/users/" + this.userName)
     .subscribe((response) =>{
       console.log(response)
       this.httpResponse = response;
       this.isFetched = true

     },
     (error) =>{

     }
     )
  }
  inputText: string = "Initial value";
}
